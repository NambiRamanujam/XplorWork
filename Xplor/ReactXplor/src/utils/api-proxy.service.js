const promise = require("es6-promise");
import fetch from 'isomorphic-fetch';

module.exports = {
    post: function (resourceUrl, params) {
        let Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
          fetch(resourceUrl, {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },            
            body: JSON.stringify(params)
          })
          .then(checkStatus)
          .then(function (response) {
            resolve(response.json());
          })
          .catch(function (err) {
            reject(err);
          });
        });
    }
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}
