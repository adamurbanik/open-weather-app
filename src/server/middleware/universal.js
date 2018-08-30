import path from 'path';
import fs from 'fs';

import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { flushToHTML } from 'styled-jsx/server';
import asyncBootstrapper from 'react-async-bootstrapper';
import serialize from 'serialize-javascript';

const prepHTML = (data, { html, head, body, asyncState }) => {
  data = data.replace('<html lang="en">', `<html ${html}`);
  data = data.replace('</head>', `${head}</head>`);
  data = data.replace(
    '<div id="root"></div>',
    `<span>SERVER RENDERED</span><div id="root">${body}</div>`
  );
  data = data.replace(
    '</body>',
    `</body> <script type="text/javascript">window.ASYNC_COMPONENTS_STATE = ${serialize(
      asyncState
    )}</script>`
  );
  return data;
};

const universalLoader = (routeMarkup, asyncContext, req, res) => {
  const filePath = path.resolve(__dirname, '../index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      return res.status(404).end();
    }

    asyncBootstrapper(routeMarkup).then(() => {
      const appString = renderToString(routeMarkup);
      const asyncState = asyncContext.getState();
      const helmet = Helmet.renderStatic();
      const styles = flushToHTML();

      const html = prepHTML(htmlData, {
        html: helmet.htmlAttributes.toString(),
        head:
          helmet.title.toString() +
          helmet.meta.toString() +
          helmet.link.toString() +
          styles,
        body: appString,
        asyncComponentState: asyncState
      });

      res.send(html);
    })
      .catch((err) => res.send(err));
  });
};

export default universalLoader;
