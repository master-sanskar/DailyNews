const mongoose = require("mongoose")
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1:27017/daily_news")
    .then(() => console.log("db is connected"))
    .catch(() => console.log(err));