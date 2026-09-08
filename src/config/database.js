const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://gpijush55_db_user:JHoFQDQruSqDfugm@devtindercluster.eqzsbv5.mongodb.net/devTinder');
}

module.exports = connectDB;