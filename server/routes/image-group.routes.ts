import { Router } from 'express';
import { ImageGroupController } from '../controllers/image-group.controller';

const imageGroupRouter = Router();
const controller = new ImageGroupController();

imageGroupRouter.route('imageGroups').get(controller.getImageGroup);

export { imageGroupRouter };
