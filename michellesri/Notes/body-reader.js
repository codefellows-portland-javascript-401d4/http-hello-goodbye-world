
module.exports = function bodyReader(req, cb) {
  let body = '';
  req.on('data', chunk => {
    body += chunk;

  });
  req.on('end', () => {
    try{
      cb(null, JSON. parse(body));
    }
    catch(err){
      cb(err);
    }
  });
};
