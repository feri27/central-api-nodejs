
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/central_ocpp_log', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected!');
});

var chargeLogsSchema = new mongoose.Schema({
  MessageTypeId: Number,
  UniqueId: String,
  Action: String,
  Payload: Object
});

var chargeLogs = mongoose.model('chargeLogs',chargeLogsSchema);

module.exports = chargeLogs;