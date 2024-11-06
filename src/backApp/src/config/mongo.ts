const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose.connect("mongodb://localhost:27017/magneto-test", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

const textSchema = {
    text: String,
};
    
const Texts = mongoose.model("Text", textSchema);

module.exports = { dbConnect }