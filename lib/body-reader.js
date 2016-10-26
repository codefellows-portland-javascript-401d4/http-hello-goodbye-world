function bodyReader(req, res, cb) {
  let body = '';

  req.on('data', data => {
    body += data;
  });

  req.on('end', () => {
    try {
      cb(null, JSON.parse(body));
    }
    catch (err) {
      cb(err, res);
    }
  });
}

module.exports = bodyReader;