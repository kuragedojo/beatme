
# beatMe
This project aims to be a simply, user centric, add free interval timer app.
It is currently under development and has no stable release yet.
The app will be open source, ad free and for free.

## MVP
* deliver a preset of timers like HIIT
* let users define custom interval timers by rounds, set, warm up time, workout time and rest time
* abillity to start, pause, stop and restart timers

## Roadmap
* configure theme
* multi language support
* control music apps

## Contribution
Everybody is free to contribute to this repository, by forking and creating pull-requests,
taking the following rules into account:
* pull requests must include a speaking title and a full description
* the title must make use of the following prefixes, if applicable
  * cbf: code beautify / linting
  * fix: bugfix
  * patch: update of one or more dependencies
* the compile and build process must not show any warnings or errors
* the code coverage of tests must not be decreased
* eslint has to be executed before
* tests have to be run before

## Development
The project uses npm/node and is build with [ionic framework](https://ionicframework.com/docs).

1) Install ionic cli globally
```bash
$ npm install -g @ionic/cli
```

2) Install projects dependencies
```bash
$ npm install
```
3) Start app with local dev server
```bash
$ ionic serve
```

See other npm scripts in package.json for more options
