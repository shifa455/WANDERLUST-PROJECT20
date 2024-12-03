const Listing = require("./models/listing");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema , reviewSchema} = require("./schema.js");
const Review = require("./models/review.js");


//isloggedin
module.exports.isLoggedIn = (req,res,next) => {
      if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "you must be logged in to create listing!");
        return res.redirect("/login");
      }
      next();
};

//saveRedirectUrl
module.exports.saveRedirectUrl = (req,res,next) => {
  if(req.session.redirectUrl){
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

//isOwner
module.exports.isOwner = async (req,res,next) => {
  const { id } = req.params;
  let listing = await Listing.findById(id);
  if(!listing.owner._id.equals(res.locals.currUser._id)){
    req.flash("error","You are not the owner of this listing");
    return res.redirect(`/listings/${id}`);
  }
  next();
};


//validatingListing
module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//validatingReview
module.exports.validateReview = (req, res,next)=>{
  let {error} = reviewSchema.validate(req.body);
  if(error){
  let errMsg = error.details.map((el) => el. message).join(",");
  throw new ExpressError(400, errMsg);
 }else{
  next();
 }
};

//author
module.exports.isReviewAuthor = async (req,res,next) => {
  const {id, reviewId} = req.params;
  let review = await Review.findById(reviewId);
  if(!review.author.equals(res.locals.currUser._id)){
    req.flash("error","You are not the author of this review");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

