const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const routes = require("./routes/api");
const users = require("./routes/api");
const app = express();

//ADDED NEW STUFF START
// const path = require("path");
// const multer = require("multer");
const cors = require("cors");
// const GridFsStorage = require("multer-gridfs-storage");
// const Grid = require("gridfs-stream");
// const crypto = require("crypto");
//ADDED NEW STUFF END

// const apiKey = process.env.apiKey;

// ADD YOUR MONGO USERNAME/PASS/DB NAME HERE

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pitchit_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  // gfs = Grid(mongoose.connection.MONGODB_URI, mongoose.mongo);
  // gfs.collection('uploads');
  console.log('=================================');
  console.log('MongoDB successfully connected!!!');
  console.log('=================================');
}).catch(err => console.log(err + " => Error while connecting to mongo!!!"));

// Bodyparser middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cors());

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Heroku deployment build folder
// app.use(express.static('client/build'));

// const root = require('path').join(__dirname, 'client', 'build')
// app.use(express.static(root));

// app.get("*", (req, res) => {
//     res.sendFile('index.html', { root });
// });

// Routes
app.use("/api/users", users);
app.use('/api', routes);

app.use(express.static('client/build'));

app.get('/*', (req, res) => {
  let url = path.join(__dirname, './client/build', 'index.html');
  if (!url.startsWith('/*'))
    url = url.substring(1);
  res.sendFile(url);
});

//ADDED NEW STUFF START
// Create storage engine
// const storage = new GridFsStorage({
//   url: MONGODB_URI,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err)
//         }
//         const filename = file.originalname
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'uploads',
//         }
//         resolve(fileInfo)
//       })
//     })
//   },
// })

// const upload = multer({ storage })

// app.post('/', upload.single('img'), (req, res, err) => {
//   if (err) throw err
//   res.status(201).send()
// })

// let gfs;

// app.get('/:filename', (req, res) => {
//   gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
//     // Check if file
//     if (!file || file.length === 0) {
//       return res.status(404).json({
//         err: 'No file exists',
//       })
//     }

//     // Check if image
//     if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
//       // Read output to browser
//       const readstream = gfs.createReadStream(file.filename)
//       readstream.pipe(res)
//     } else {
//       res.status(404).json({
//         err: 'Not an image',
//       })
//     }
//   })
// });
//ADDED NEW STUFF END

const PORT = process.env.PORT || 8080; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));