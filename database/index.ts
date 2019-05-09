import * as mongoose from 'mongoose';
import ImageGroup from './models/image-group.model';

/**
 * Create connection with a mongo db instane
 * @param databaseUrl url of a mongo db instance
 */
const connectDb = async (databaseUrl: string) => {
  return mongoose.connect(databaseUrl).then(() => {
    console.log(`Connected to database`);
  }).catch(err => {
    console.error(err);
  });
};

const models = { ImageGroup };

export { connectDb };

export default models;
