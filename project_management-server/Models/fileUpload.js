const mongoose = require("mongoose");
const fileuploadSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
 
  pdf : {
    type: String,
  },
  cloudinary_id_img: {
    type: String,
  },
 
  cloudinary_id_pdf: {
    type: String,
  }
});

module.exports = mongoose.model("fileupload", fileuploadSchema);
