const express = require("express");
const app = express();
const mongoose  =require("mongoose");
const Listing= require("./models/listing.js");
const path = require("path");
const methodOverride= require("method-override");
const ejsMate =require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("./schema.js");
const Review= require("./models/review.js");
const listingRouter = require("./routes/lisitng.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const { Session } = require("inspector/promises");
const session = require("express-session");
const flash =  require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");



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

const sessionOptions ={
    secret : "mysecretcode",
    resave : false,
    saveUninitialized: true,
    cookie:{
        expires :Date.now()+7*24*60*60*1000,
        maxAge: 7*24*60*60,
        httpOnly:true
    },
};


app.get("/",(req,res)=>{
    res.send("root");
})

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

// app.get("/demouser",async(req,res)=>{
//     let fakeUser = new User ({
//         email:"student@gmail.com",
//         username: "Anugrah",
//     });
//     let registeredUser= await User.register(fakeUser,"hello");
//     res.send(registeredUser);
// })

app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);

app.all("*",(req,res,next)=>{
    next (new ExpressError(404,"Page not found"))
})

app.use((err,req,res,next)=>{
    let{statusCode =500,message="Something went wrong!"}= err;
    res.status(statusCode).render("error.ejs",{message});
   
})

app.listen(8080, ()=>{
    console.log("server started");
})