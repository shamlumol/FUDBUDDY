const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security: Set HTTP Headers
app.use(helmet());

// Security: Strict CORS (only allow frontend origin)
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Security: Global Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

app.use(express.json({ limit: '10kb' })); // Limit body size

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/fudbuddy')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB connection error:', err));

const { auth } = require('express-oauth2-jwt-bearer');

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE || 'YOUR_AUTH0_API_AUDIENCE',
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL || 'https://YOUR_AUTH0_DOMAIN/',
});

// Apply checkJwt middleware to protect the /api routes
// Only authenticated requests with a valid token can access these routes
app.use('/api', checkJwt, apiRoutes);

app.get('/', (req, res) => {
  res.send('Fudbuddy API is running securely');
});

// Security: Centralized Error Handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err.message);
  
  // Do not expose stack traces in production
  if (err.status === 401) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  res.status(err.status || 500).json({ 
    error: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : err.message 
  });
});

app.listen(PORT, () => {
  console.log(`Server running securely on port ${PORT}`);
});
