import { logger } from '../lib';

export default function requestLogger(req, res, { query }) {
  logger.info(`${req.method} - ${req.baseUrl} - ${query}`);
}
