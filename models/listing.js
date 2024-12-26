const mongoose = require("mongoose");
const Review = require("./review.js");
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
    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref:"Review"
        },
    ],

});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id : {$in:listing.reviews}})
    }
    
})

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing