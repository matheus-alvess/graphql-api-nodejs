export default function requestLogger(req, res, next) {
  console.log(`${new Date().toLocaleString()} - ${req.method} - ${req.url}`);
  next();
}
