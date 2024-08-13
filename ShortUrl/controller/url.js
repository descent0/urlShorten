const { nanoid } = require("nanoid");
const { url } = require("../models/url");

const handleGenerateShortUrl = async (req, res) => {
  const { redirectUrl } = req.body;

  if (!redirectUrl) {
    return res.status(400).json({ msg: "URL required" }); // 400 Bad Request for missing URL
  }

  const ShortId = nanoid(8);

  try {
    await url.create({
      shortId: ShortId,
      redirectUrl: redirectUrl, // Consistent naming
      visitHistory: [],
    });

    return res.status(201).json({ id: ShortId }); // 201 Created
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error" }); // Handle potential errors
  }
};

module.exports = {
  handleGenerateShortUrl,
};
