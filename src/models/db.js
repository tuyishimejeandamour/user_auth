const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/exam1', { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    console.log('connected to mongodb');
}
);
mongoose.connection.on('error', (err) => {
    console.log(err);
});