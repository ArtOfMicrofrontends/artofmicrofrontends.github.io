import * as React from 'react';
import { resolve } from 'path';
import { renderToStaticMarkup } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { writeAssets, addAsset} from './load-assets';
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
  ${styleTags}
</head>
<body>${body}${dev}</body>
</html>
`;

addAsset(Buffer.from(html, 'utf-8'), 'index.html');

writeAssets(dist);
