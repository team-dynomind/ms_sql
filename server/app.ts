import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { Environment } from "./interfaces/env";
import error from './errors/error';
import db from './models';

class App {
  public app: express.Application;

  constructor(private env: Environment) {
    this.app = express();
    this.initMW();
    this.app.use(error);
  }

  private initMW() {
    this.app.set('env', this.env);
    this.app.enable("trust proxy");
    this.app.use(logger('dev'));
    this.app.use(express.json({ limit: '100mb' }));
    this.app.use(express.urlencoded({ extended: false, limit: '100mb' }));
    this.app.use(cookieParser());
    this.app.use(function (req, res, next) {
      res.setTimeout(0);
      next();
    });
    this.app.disable('x-powered-by');
  }

  private async connectDb() {
    return db.sequelize.sync();
  }

  public listen() {
    this.connectDb()
      .then(() => {
        var server = this.app.listen(this.env.PORT, async() => {
          console.log(`App listening on the port ${this.env.PORT}`);

          const res = await db.sequelize.query("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE='BASE TABLE'");
          console.log( 'res', res );
        });
        server.timeout = 1800000;
      });
  }
}

export default App;
