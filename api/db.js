const mongoose = require("mongoose");

const username = 'johnnywu';
const password = '58HGSX7TQxqBMY1r';
const cluster = 'cluster0.tnewc';
const dbname = 'snowDB';

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'database connection error:'));
db.once('open', function() {
  console.log('we are connected to the database!');
});

module.exports.db = db;


// let save = (entry) => {
//   return new Entry({
//     word: entry.word,
//     definition: entry.definition
//   }).save()
// }

// let getAll = () => {
//   return Entry.find({}).exec()
// }

// let getOne = (query) => {
//   return Entry.findOne(query, 'word definition').exec();
// }



// module.exports.save = save;
// module.exports.getAll = getAll;
// module.exports.getOne = getOne;