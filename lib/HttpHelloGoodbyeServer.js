const http = require('http');
const parseUrl = require('url').parse;

const todo_list = {
  task1: 'Learn about Promises',
  task2: 'Complete the lab',
  task3: 'Read about REST APIs',
  task4: 'Do a big project'
};

function passMsg(opts) {
  return opts.msg;
}

function getFavorite(opts) {
  if ('bird' in opts) return 'Red-tailed hawk';
  else if ('mammal' in opts) return 'Wolverine';
  else if ('flower' in opts) return 'Rhododendron';
  else if ('coffee' in opts) return 'Sulawesi';
  else return 'Favorite what?';
}

function getTodoList(opts) {
  if (opts.format === 'json') {
    return todo_list;
  }
  else return JSON.stringify(todo_list);
}

module.exports = http.createServer((req, resp) => {

  const url = parseUrl(req.url, true); // true means parse the query string into key/value pairs

  if (req.method === 'GET') {
    const get_responses = {
      '/': { func: passMsg, opts: { msg: 'Hello, world!' } },
      '/hello': { func: passMsg, opts: { msg: 'Hello, world!'} },
      '/goodbye': { func: passMsg, opts: { msg: 'Goodbye, world!' } },
      '/hows-the-weather': { func: passMsg, opts: { msg: 'It\'s cool and rainy. :-(' } },
      '/todo': { func: getTodoList, opts: url.query },
      '/favorite': { func: getFavorite, opts: url.query }
    };

    resp.statusCode = 200;
    if (url.pathname in get_responses) {
      const resp_obj = (get_responses[url.pathname].func)(get_responses[url.pathname].opts);
      if (typeof resp_obj === 'object') {
        resp.setHeader('Content-Type', 'application/json');
        resp.write(JSON.stringify(resp_obj));
      }
      else {
        resp.setHeader('Content-Type', 'text/plain');
        resp.write(resp_obj);
      }
    }
    else {
      resp.statusCode = 404;
      resp.write(`I don't know how to GET the URL ${req.url}. Please request /hello, /goodbye, /hows-the-weather, /favorite?[thing] or /todo[?format=[text|json]]`);
    }
    resp.end();
  }

  else if (req.method === 'POST') {
    const post_responses = {
      '/favorite': { func: passMsg, opts: { msg: `Sorry, not changing my favorite to ${url.query.coffee}!` } }
    };

    resp.statusCode = 200;
    resp.statusCode = 200;
    if (url.pathname in post_responses) {
      const resp_obj = (post_responses[url.pathname].func)(post_responses[url.pathname].opts);
      resp.setHeader('Content-Type', 'text/plain');
      resp.write(resp_obj);
    }
    else {
      resp.statusCode = 404;
      resp.write(`I can't POST the URL ${req.url}.`);
    }
    resp.end();
    
  }
});