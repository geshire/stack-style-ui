import StyleUi from "./src/server/app";
const styles = {};

/* initialize
................................*/
StyleUi({
  styles: styles,
  env: "development",
  port: 3000,
  // staticFiles: `${__dirname}/assets/guide`,
  // distDir: `${__dirname}/dist`,
  // logo: "classcentral.svg",
  // host: "http://localhost",
  // head: `<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,700&display=swap" rel="stylesheet">`,
});
