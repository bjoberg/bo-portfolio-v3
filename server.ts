import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import * as compression from 'compression';
import { join } from 'path';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { connectDb } from './database';
// import { imageGroupRouter } from './server/routes/image-group.routes';
import { ImageGroupController } from './server/controllers/image-group.controller';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

const app = express();
const imageGroupController = new ImageGroupController();

const PORT = process.env.PORT || 5000;
const DIST_FOLDER = join(process.cwd(), 'dist');
const NODE_ENV = process.env.NODE_ENV || 'development';
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/brett-oberg-images-dev';

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

/**
 * Require that all routes are forwarded to https
 * @param req network request
 * @param res network response
 * @param next callback function
 */
const requireHttps = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && NODE_ENV !== 'development') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
};

app.use(compression());
app.use(requireHttps);
// app.use('/api/v1/', imageGroupRouter);
app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

/**
 * All API requests
 */
app.get('/api/v1/imageGroups', imageGroupController.getImageGroup);

/**
 * Serve static files from /browser
 */
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

/**
 * Return sitemap.xml file for web crawlers
 */
app.get('/sitemap.xml', function(req, res) {
  res.render(join(DIST_FOLDER, 'browser', 'sitemap.xml'), { req });
});

/**
 * Return robots.txt file for web crawlers
 */
app.get('/robots.txt', function(req, res) {
  res.render(join(DIST_FOLDER, 'browser', 'robots.txt'), { req });
});

/**
 * All regular routes use the Universal engine
 */
app.get('*', (req, res) => {
  res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req });
});

/**
 * Start the node web server once the application has connected to the databse
 */
connectDb(DATABASE_URL).then(async () => {
  app.listen(PORT, () => {
    console.log(`Node server listening on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error(err);
});
