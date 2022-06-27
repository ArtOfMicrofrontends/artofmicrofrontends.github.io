import * as React from 'react';
import { resolve } from 'path';
import { renderToStaticMarkup } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { writeAssets, addAsset, addAssets} from './load-assets';
import { Page } from './Page';

const root = resolve(__dirname, '..');
const dist = resolve(root, 'dist');
const sheet = new ServerStyleSheet();
const body = renderToStaticMarkup(sheet.collectStyles(<Page />));
const dev = process.env.NODE_ENV === 'debug' ? `<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>` : '';
const styleTags = sheet.getStyleTags();

sheet.seal();

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>The Art of Micro Frontends - Florian Rappl</title>
  <meta name="description" content="Become an expert in micro frontends by following the book The Art of Micro Frontends by Florian Rappl.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="index, follow">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  ${styleTags}
</head>
<body>${body}${dev}</body>
</html>
`;

addAssets(resolve(__dirname, 'static'));

addAsset(Buffer.from(html, 'utf-8'), 'index.html');

writeAssets(dist);
