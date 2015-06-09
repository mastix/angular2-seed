# Introduction

This is a little demo project for my blog series [Project-WebDev Blog - How to create your own website based on Docker](http://project-webdev.blogspot.de/2015/05/create-site-based-on-docker-part1.html) and is based on the seed project for Angular 2 apps.

All this demo does is creating a little Angular 2 application that communicates with REST Service that we've build in our blog series: [How to create your own website based on Docker (Part 8 - Creating the ioJS REST API Docker container)] (http://project-webdev.blogspot.de/2015/05/create-site-based-on-docker-part8-iojs-rest-api-docker-image.html)

Feel free to download and play with it! ;)

**Important:** There are no data validations nor performance optimizations or whatsoever implemented as this is just a very very little demo! ;)

**Note:** Angular 2.0 is not production ready yet! This seed project is perfect for playing around with the latest versions but do not start new projects with it since a lot of new changes are going to be introduced until the framework is officially released.

# How to start

```bash
git clone https://github.com/mastix/person-demo-angular2-seed.git
cd person-demo-angular2-seed

# If you don't have gulp or bower already installed
npm install -g gulp bower

# NPM will automatically trigger bower, so no need to run bower install separately
npm install

# Build the web page (which will then be created within a /dist folder)
gulp build.prod
```

# Contributors

I'm the only contributor for this demo project, but since this is based on the Angular 2 Seed project, the contributers for the base projects are the following ones:

[mgechev](https://github.com/mgechev) |[ludohenin](https://github.com/ludohenin) |[jgolla](https://github.com/jgolla) |

# Change Log

You can follow the [Angular 2 change log here](https://github.com/angular/angular/blob/master/CHANGELOG.md).

# License

MIT
