const winston = require('winston');

// Configure winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'combined.log',
      maxsize: 10 * 1024 * 1024, // Set maximum size to 10MB
      maxFiles: 5 // Optional: Limit the number of log files (default is unlimited)
    })
  ]
});

module.exports = logger;
