const mongoose = require('mongoose');

const uri = "mongodb+srv://pablodb:pablo123@cluster0.uxwqr.mongodb.net/origen?retryWrites=true&w=majority";

//mongoose.connect('mongodb://127.0.0.1:27017/origen', {
mongoose.connect(uri, {
        useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});