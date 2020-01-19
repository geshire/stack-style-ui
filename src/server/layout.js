export default (config) => `
  <!doctype html>
  <html>
    <head>
      <title>Style Guide</title>
      ${config.head}
      ${config.favicon ?
        `<link rel="shortcut icon" type="image/x-icon" href="${config.favicon}" />` : ""
      }
      <link href="${config.baseUrl}/guide-styles.bundle.css" media="screen" rel="stylesheet" type="text/css">
      <link href="${config.baseUrl}/styles.min.css" media="screen" rel="stylesheet" type="text/css">
      ${config.customCSS ?
        `<link href="${config.baseUrl}/styles.custom.min.css" media="screen" rel="stylesheet" type="text/css">` : ""
      }

      <link href="${config.baseUrl}/icons.min.css" media="screen" rel="stylesheet" type="text/css">
    </head>
    <body>
      <div id="style-guide">
      </div>
    </body>
    <script>window.config = ${JSON.stringify({
      baseUrl: config.baseUrl,
      logo: config.logo,
    })}</script>
    <script>window.styles = ${JSON.stringify(config.styles)}</script>
    <script src="${config.baseUrl}/guide-scripts.bundle.js"></script>
  </html>
`;
