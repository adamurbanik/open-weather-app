import request from 'superagent';

const requestHeaders = [
  { 'name': 'X-Requested-With', 'value': 'XMLHttpRequest' },
  { 'name': 'content-type', 'value': 'application/json' },
  { 'name': 'Accept', 'value': 'application/json' }
];

const setHeaders = (req, headers) => {
  for (const header of headers) {
    req.set(header.name, header.value);
  }
};

const get = (url, additionalHeaders = []) => {
  return new Promise((resolve, reject) => {

    if (typeof additionalHeaders !== 'object') {
      reject('headers expected to be an array of objects');
    }

    const req = request.get(url);

    setHeaders(req, [
      ...requestHeaders,
      ...additionalHeaders
    ]);

    req.end((err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

export default {
  get
}
