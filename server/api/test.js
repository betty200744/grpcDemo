/**
 * Created by betty on 10/25/18.
 */
"use strict";

const send = (ctx, callback) => {
  console.log('aaa');
  callback(null, {message: `this is server , you message is ${ctx.request}`})
};

module.exports = {
  send
};