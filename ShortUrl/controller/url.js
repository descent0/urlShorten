const { nanoid } = require("nanoid");
const { url } = require("../models/url");

const handleGenerateShortUrl = async (req, res) => {
  const body = req.body;

  if (!body || !body.redirectURL) {
    return res.status(404).json({ msg: "URL required" });
  }

  const ShortId = nanoid(8);
  
  await url.create({
    shortId: ShortId,
    redirectURL: body.redirectURL,
    visitHistory: [],
  });

  return res.json({ id: ShortId });
};


module.exports = {
  handleGenerateShortUrl,
};
