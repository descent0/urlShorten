const express= require('express');
const { handleGenerateShortUrl } = require('../controller/url');
const urlRouter=express.Router();

urlRouter.post("/",handleGenerateShortUrl);
module.exports={
    urlRouter,
}