import { Request, Response } from 'express';

class ImageGroupController {
  public getImageGroup = (req: Request, res: Response) => {
    try {
      res.send('Greetings from the Test controller!');
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: 'Unable to retrieve image group.'
      });
    }
  }
}

export { ImageGroupController };
