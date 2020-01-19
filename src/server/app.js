/* PACKAGES
..............................*/
import express from "express";
import parser from "body-parser";
import layout from "./layout";

export default (config) => {
  const app = express();

  /* EXPRESS MIDDLEWARE
  ..............................*/
  app.use(parser.json());
  app.use(express.static(`${__dirname}/../dist`));
  app.use(express.static(`${config.distDir}`));
  app.use(express.static(`${config.staticFiles}`));
  app.use(parser.urlencoded({ extended: true }));

  /* ROUTES
  ..............................*/
  app.get('*', function(request, response) {
    response.send(layout({
      baseUrl: `${config.host}:${config.port}`,
      head: config.head,
      styles: config.styles,
      logo: config.logo,
      favicon: config.favicon,
      customCSS: config.customCSS,
    }));
  });

  /* LISTEN
  ..............................*/
  app.listen(config.port, () => {
    console.log(`Web server listening on port ${config.port}`);
  });
}
