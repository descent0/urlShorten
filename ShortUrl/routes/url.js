const express = require("express");
const { handleGenerateShortUrl } = require("../controller/url");
const { url } = require("../models/url");
const urlRouter = express.Router();

urlRouter.post("/", handleGenerateShortUrl);
urlRouter.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await url.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl);
});
module.exports = {
  urlRouter,
};
