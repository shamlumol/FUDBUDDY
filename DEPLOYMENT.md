#

**specific differences and requirements** for deploying a MERN stack (React frontend + Node.js backend).

---

## 1. Node.js & PM2 Requirement

Unlike PHP (which runs via Apache mod_php or FPM), the Node.js backend must run as a continuous background process. You will need Node.js and PM2.

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 globally (Process Manager)
sudo npm install -g pm2
```

---

## 2. Starting the Node.js Backend

You cannot simply put the backend files in a folder; you must install its dependencies and start it as a background service on a specific port (e.g., `5000`).

```bash
cd /var/www/fudbuddy/server

# Install Node dependencies
npm install

# Create/Edit the .env file
nano .env  # Add PORT=5000, MONGO_URI, etc.

# Start the backend using PM2
pm2 start server.js --name "fudbuddy-backend"
pm2 save
pm2 startup
```

---

## 3. Compiling the React Frontend

Unlike Laravel blades, React code cannot be served directly. It must be compiled into static HTML/CSS/JS files first.

```bash
cd /var/www/fudbuddy/client

# Install frontend dependencies
npm install

# Compile the React app
npm run build
```
This command creates a new `dist/` folder inside the client directory (`/var/www/fudbuddy/client/dist`). **This `dist/` folder is what Apache must serve as the DocumentRoot.**

---

## 4. Apache Configuration for MERN (Crucial)

There are two major differences for Apache when serving a React + Node app:

1. **React Router Fallback:** React is a Single Page Application (SPA). If a user refreshes the page on `/menu`, Apache will throw a 404 error unless you configure it to redirect all traffic to `index.html`.
2. **Reverse Proxy:** Apache must proxy all `/api` requests to the running Node.js backend (Port `5000`).

Enable required Apache modules:
```bash
sudo a2enmod proxy proxy_http rewrite
```

**Apache VirtualHost Template:**
```apache
<VirtualHost *:80>
    ServerName yourdomain.com

    # 1. Point DocumentRoot to the React compiled 'dist' folder
    DocumentRoot /var/www/fudbuddy/client/dist

    <Directory /var/www/fudbuddy/client/dist>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        
        # 2. React SPA Fallback: Direct all non-file requests to index.html
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>

    # 3. Reverse Proxy: Send API requests to the Node.js backend
    ProxyPreserveHost On
    ProxyPass /api http://localhost:5000/api
    ProxyPassReverse /api http://localhost:5000/api

    ErrorLog ${APACHE_LOG_DIR}/fudbuddy_error.log
    CustomLog ${APACHE_LOG_DIR}/fudbuddy_access.log combined
</VirtualHost>
```

---

## 5. Applying Updates in the Future

When you receive new code (e.g. a new `.zip`), overwrite the files in `/var/www/fudbuddy` and run the build steps again.

```bash
# If Backend changed:
cd /var/www/fudbuddy/server
npm install
pm2 restart fudbuddy-backend

# If Frontend changed:
cd /var/www/fudbuddy/client
npm install
npm run build
```
