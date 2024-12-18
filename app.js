const express = require("express");
const app = express();
const mongoose  =require("mongoose");
const Listing= require("./models/listing.js");
const path = require("path");
const methodOverride= require("method-override");
const ejsMate =require("ejs-mate");

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust'
main().then((res)=>{console.log("result")}).catch((err)=>{console.log("error")});
async function main() {
  await mongoose.connect(MONGO_URL);

}
app.get("/",(req,res)=>{
    res.send("root");
})
// app.get("/test",async (req,res)=>{
//     let sample = new Listing({
//         title:  "My Vilal",
//         description: "my sweetyu",
//         price :2900,
//         location: "goa",
//         country: "India",
//     });
//     await sample.save();
//     console.log("sample saved");
//     res.send("sample seen ");

// })
//Index ROute
app.get("/listings", async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
});
app.get("/listings/new",(rq,res)=>{
    res.render("listings/new.ejs")
})
//Show Route
app.get("/listings/:id",async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});
//Create 
app.post("/listings",async(req,res)=>{
    //let {title,description,image,price,location,country} = req.body;
    const newListing= new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings")

})
//Edit Route
app.get("/listings/:id/edit",async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
});

app.put("/listings/:id",async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);

});

app.delete("/listings/:id",async(req,res)=>{
    let {id} = req.params;
    let deletedListing= await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings")
})

app.listen(8080, ()=>{
    console.log("server started");
})