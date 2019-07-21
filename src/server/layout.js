export default (config) => `
  <!doctype html>
  <html>
    <head>
      <title>Style Guide</title>
      ${config.head}
      <link href="${config.baseUrl}/guide-styles.bundle.css" media="screen" rel="stylesheet" type="text/css">
      <link href="${config.baseUrl}/styles.min.css" media="screen" rel="stylesheet" type="text/css">
    </head>
    <body>
      <div id="style-guide">
      </div>
    </body>
    <script src="${config.baseUrl}/guide-scripts.bundle.js"></script>
  </html>
`;
