require('dotenv').config();

const express = require("express");
const router = express.Router();
const Listing= require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("../schema.js");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const lisitngController = require("../controllers/listing.js");
const multer = require('multer');
const { storage } = require('../cloud.js'); // Match the filename exactly
const upload = multer({ storage })




router
    .route("/")
    .get(wrapAsync(lisitngController.index))
    .post(isLoggedIn,upload.single("listing[image]"),validateListing,wrapAsync(lisitngController.create));
    // .post(upload.single("listing[image]"), (req, res) => {
    //     console.log(req.file); // Logs uploaded file data
    //     res.send(req.file);
    // });
    
    

//Index ROute


//New Route
router.get("/new",isLoggedIn,lisitngController.renderNewForm);

//Show Route
router.get("/:id",wrapAsync(lisitngController.showListing));

//Create 


//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(lisitngController.edit));

//Update Route
router.put("/:id",isLoggedIn,isOwner,upload.single("listing[image]"),validateListing,wrapAsync(lisitngController.update));

//Delete Route
router.delete("/:id",isLoggedIn,isOwner,wrapAsync(lisitngController.delete));


module.exports = router;