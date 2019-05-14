import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

class ImageGroupController {
  public getImageGroup = (req: Request, res: Response) => {
    try {
      res.send('Greetings from the controller!');
      // mongoose.connection.db.collection('imagegroups', function (err, collection) {
      //   collection.find().toArray();
      // });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: 'Unable to retrieve image group.'
      });
    }
  }
}

export { ImageGroupController };
