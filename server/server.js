/**
 * Created by betty on 10/25/18.
 */
"use strict";
const grpc = require('grpc');
const testServer = require('./api/test');


const serverProto = grpc.load(`${__dirname}/../proto/test.proto`);
const MainService = serverProto.test.MainService;

const server = new grpc.Server();
server.addService(MainService.service, {
  send(r, cb) {
    console.log('befor send');
    console.log(r.request);
    cb(null, r.request.message);
  }
});
server.bind('0.0.0.0:5001', grpc.ServerCredentials.createInsecure());
server.start();
console.log('grpc server is start!!');

