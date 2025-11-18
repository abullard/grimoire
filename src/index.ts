"use strict";
import { server } from "@hapi/hapi";

const init = async () => {
  const svr = server({
    port: 3000,
    host: "localhost",
  });

  svr.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello World!";
    },
  });

  await svr.start();
  console.log("Server running on %s", svr.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
