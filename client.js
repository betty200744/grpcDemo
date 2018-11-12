/**
 * Created by betty on 10/25/18.
 */
"use strict";
const rp = require('request-promise');

rp('http://127.0.0.1:5007').then((res) => {
  console.log(res);
});
