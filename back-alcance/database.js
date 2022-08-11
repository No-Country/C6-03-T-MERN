const mongoose = require('mongoose')
const URI = 'mongodb://localhost/mern-alcance'

mongoose.connect(URI)
  .then(DB => console.log('DB is connected'))
  .catch(err => console.error(err))

module.exports = mongoose;