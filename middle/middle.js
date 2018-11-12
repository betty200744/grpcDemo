/**
 * Created by betty on 10/25/18.
 */
"use strict";
const Koa = require('koa');
const grpc = require('grpc');

const app = new Koa();
const testProto = grpc.load(`${__dirname}/../proto/test.proto`);
const MainService = testProto.test.MainService;

app.use(ctx => {
  const grpcClient = new MainService('127.0.0.1:5001', grpc.credentials.createInsecure());
  const result =  grpcClient.send({message: 'client send'}, (err, res) => {
    console.log(`server response ${res.message}`);
    return res.message.toString();
  });
  ctx.body = result;
});

app.listen(5007);