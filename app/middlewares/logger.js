import { logger } from '../lib';

export default function requestLogger(req, res, next) {
  logger.info(`${req.method} - ${req.url}`);
  next();
}
