# Modular Project Scaffolding

Separation of concerns for front end and back end

## Getting Started

First thing you need to do is install dependencies:
```
$ npm install
```

Then you can run the SPA and the API in development mode (watching for changes) with:
```
$ npm start
```

### www and api folders

Each folder has its own scripts you can run if you just want to work in one part of the app.

## npm scripts

### npm install
`npm install` will install the root folder (development) dependencies, and after that do the same with `www` dependencies and `api` dependencies.

### npm start
`npm start` will run both subfolders' `npm start` in parallel using [`npm-run-all`](https://github.com/mysticatea/npm-run-all).

### npm run build
`npm run build` will run both subfolders' `npm run build` in parallel.


## notes
`npm-run-all` is a CLI tool to run multiple npm-scripts in parallel or sequential.
`run-p` is a CLI command from `npm-run-all` to run given npm-scripts in parallel.