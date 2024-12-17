const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/a-couple-of-lawn-chairs-sitting-next-to-a-pool-iWmf9Gl3yMw",
        set: (v) => v === "" ? "https://unsplash.com/photos/a-couple-of-lawn-chairs-sitting-next-to-a-pool-iWmf9Gl3yMw" : v,
    },
    price: Number,
    location: String,
    country: String,

});

  

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing