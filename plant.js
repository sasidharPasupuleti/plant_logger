// // const express = require('express');
// // const fs = require('fs');
// // const bodyParser = require('body-parser');
// // const app = express();
// // const port = 3000;
// // const logFile = 'log.txt';

// // // Set the view engine to EJS
// // app.set('view engine', 'ejs');

// // // Check if the log file exists, and create it if it doesn't
// // if (!fs.existsSync(logFile)) {
// //   fs.writeFileSync(logFile, '', { flag: 'wx' });
// // }

// // // Middleware to parse the request body
// // app.use(bodyParser.text());

// // // Serve static files from the "public" directory
// // app.use('/public', express.static('public'));

// // // Route handler for the check-in page
// // app.get('/checkin', (req, res) => {
// //   // Read the file and retrieve the last line
// //   const fileContent = fs.readFileSync(logFile, 'utf8');
// //   const lines = fileContent.trim().split('\n');
// //   const lastLine = lines[lines.length - 1];
// //   const lastLogDate = new Date(lastLine);
// //   const currentDate = new Date();
// //   const timeDifference = Math.abs(currentDate - lastLogDate) / (1000 * 60 * 60); // Time difference in hours

// //   // Render the check-in page with the button, last log entry, and time difference
// //   res.render('checkin', { lastLine, timeDifference });
// // });

// // // Route handler for logging the check-in
// // app.post('/log', (req, res) => {
// //   const currentDate = req.body;
// //   fs.appendFileSync(logFile, `${currentDate}\n`);
// //   res.sendStatus(200);
// // });

// // // Start the server
// // app.listen(port, () => {
// //   console.log(`Server listening on port ${port}`);
// // });


// const express = require('express');
// const fs = require('fs');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;
// const logFile = 'log.txt';

// // Set the view engine to EJS
// app.set('view engine', 'ejs');

// // Check if the log file exists, and create it if it doesn't
// if (!fs.existsSync(logFile)) {
//   fs.writeFileSync(logFile, '', { flag: 'wx' });
// }

// // Middleware to parse the request body
// app.use(bodyParser.text());

// // Serve static files from the "public" directory
// app.use('/public', express.static('public'));

// // Route handler for the check-in page
// app.get('/checkin', (req, res) => {
//   // Read the file and retrieve the last line
//   const fileContent = fs.readFileSync(logFile, 'utf8');
//   const lines = fileContent.trim().split('\n');
//   const lastLine = lines[lines.length - 1];
//   const lastLogDate = new Date(lastLine);
//   const currentDate = new Date();
//   const timeDifference = Math.abs(currentDate - lastLogDate) / (1000 * 60 * 60); // Time difference in hours

//   // Render the check-in page with the button, last log entry, and time difference
//   res.render('checkin', { lastLine, timeDifference });
// });

// // Route handler for logging the check-in
// app.post('/log', (req, res) => {
//   const currentDate = req.body;
//   fs.appendFileSync(logFile, `${currentDate}\n`);
//   res.sendStatus(200);
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const logFile = 'log.txt';

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Check if the log file exists, and create it if it doesn't
if (!fs.existsSync(logFile)) {
  fs.writeFileSync(logFile, '', { flag: 'wx' });
}

// Middleware to parse the request body
app.use(bodyParser.text());

// Serve static files from the "public" directory
app.use('/public', express.static('public'));

// Route handler for the check-in page
app.get('/checkin', (req, res) => {
  // Read the file and retrieve the last line
  const fileContent = fs.readFileSync(logFile, 'utf8');
  const lines = fileContent.trim().split('\n');
  const lastLine = lines[lines.length - 1];
  const lastLogDate = new Date(lastLine);
  const currentDate = new Date();
  const timeDifference = Math.abs(lastLogDate - currentDate) / (1000 * 60 * 60); // Time difference in hours

  // Render the check-in page with the button, last log entry, and time difference
  res.render('checkin', { lastLine, timeDifference });
});

// Route handler for logging the check-in
app.post('/log', (req, res) => {
  const currentDate = req.body;
  fs.appendFileSync(logFile, `${currentDate}\n`);
  res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
