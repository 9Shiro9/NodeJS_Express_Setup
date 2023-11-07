const express = require("express");

const router = express.Router();

const path = require("path") ; 

const rootDir = require("../util/path") ;

router.get("/", (req, res, next) => {
    res.sendFile(path.join( rootDir , "views" , "shop.html"))
    // res.send("<h1>Hello From Express</h1>")
 })

module.exports = router;