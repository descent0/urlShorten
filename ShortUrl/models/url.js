const { default: mongoose } = require("mongoose");

const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  redirectUrl: {
    type: String,
    required: true,
  },
  visitHistory: [
    {
      timeStamp: { type: Number },
    },{
        timeStamp:true
    }
  ],
});

const url=mongoose.model('url',urlSchema);
module.exports={
    url,
}