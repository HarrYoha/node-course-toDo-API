var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://Aslatiel:REDreaper96@ds161710.mlab.com:61710/todo');



module.exports = {
    mongoose
};