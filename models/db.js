const mongoose = require("mongoose")
mongoose.set('strictQuery', false);

mongoose
    .connect("mongodb://127.0.0.1:27017/daily_news")
    .then(() => console.log("database is connected!!"))
    .catch(err => console.log(err.message));
