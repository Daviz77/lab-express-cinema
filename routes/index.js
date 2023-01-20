const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res) => res.render('index'));

router.get("/movies", (req,res )=> {
    Movie.find()
    .then(movies => {
      res.render("movies",{ movies })
  })
  .catch(error=> console.log("Error!", error))
})

router.get("/:movieID/detail", (req,res)=>{
  Movie.findById(req.params.movieID)
  .then(movie => {
      res.render("detail",{ movie })
  })
  .catch(error => console.log("Error!", error))
})

module.exports = router;
