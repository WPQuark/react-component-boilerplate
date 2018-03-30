<!---
 Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

# Another React Component BoilerPlate

This is yet another react component development boilerplate to help you get
started quickly in the year 2018.

* Pack Library UMD style with webpack.
* Create Docs on the go and publish on github.
* Run a dev server with hot reloading.
* Compile SCSS with PostCSS, Autoprefixer and CSSNano.
* [Hot Reloading](https://github.com/gaearon/react-hot-loader) of React Component.

## Getting Started

Clone or download this repo. Make sure to remove any git ref by deleting `.git`
directory. Now from terminal run

```bash
npm install
npm start
```

This will open `http://localhost:7770` on your browser where you can see it live.
Now edit your components from `src/js` and styles from `src/scss` and watch it
reload hot.

## Publishing Docs

Edit the files inside `src/docs` as necessary, and when done run

```bash
npm run docs
```

This will build the docs in the `docs` directory. Push to github and host with
github pages.

## Creating UMD dist files

Just simply run

```bash
npm run build
```

And your compiled files will be under `dist`. Now push to github or publish to
npm.

