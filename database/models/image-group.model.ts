import * as mongoose from 'mongoose';

const imageGroupSchema = new mongoose.Schema({
  identifier: {
    type: String,
    unique: true,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  displayType: {
    type: String,
    required: true
  },
  tags: {
    type: [String]
  },
  images: {
    type: [{
      _id: mongoose.Schema.Types.ObjectId,
      thumbnail: String,
      image: String,
      title: String,
      description: String,
      location: String,
      ratio: String,
      tags: [String]
    }],
    required: true
  }
});

const ImageGroup = mongoose.model('ImageGroup', imageGroupSchema);

export default ImageGroup;
