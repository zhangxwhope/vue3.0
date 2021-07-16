const { renderToString } = require('@vue/server-renderer');
const path = require('path');
const express = require('express');
const fs = require('fs');

const server = express();

const manifest = require('../dist/server/ssr-manifest.json');

const appPath = path.join(__dirname, '../dist', 'server', manifest['app.js']);
// eslint-disable-next-line import/no-dynamic-require
const createApp = require(appPath).default;

server.use('/img', express.static(path.join(__dirname, '../dist/client', 'img')));
server.use('/js', express.static(path.join(__dirname, '../dist/client', 'js')));
server.use('/css', express.static(path.join(__dirname, '../dist/client', 'css')));
server.use('/favicon.ico', express.static(path.join(__dirname, '../dist/client', 'favicon.ico')));

server.get('*', async (req, res) => {
  const { app, router } = createApp();
  router.push(req.url);
  await router.isReady();

  const appContent = await renderToString(app);

  fs.readFile(path.join(__dirname, '../dist/client/index.html'), (err, html) => {
    if (err) throw err;

    // eslint-disable-next-line no-param-reassign
    html = html.toString().replace('<div id="app">', `<div id="app">${appContent}`);

    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  });
});

server.listen(3000, () => {
  console.log('listen at http://localhost:3000');
});
