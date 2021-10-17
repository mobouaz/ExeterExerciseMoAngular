# Exeter Exercise
 Source Code: https://github.com/mobouaz/ExeterExerciseMoAngula
## Introduction:

It is an angular app that contains two pages on top of a main page.

Main page: the landing page.

Dealers page: wich displays a list of dealers.

Customer Center page: which displays a list of text sections(something similar to the customer center page on exeter website).

## Technologies:

Client side app: I used angular 10 for the front end.

Server side app: I've decided to create my own web api using asp.net core. The source code can be find here https://github.com/mobouaz/exeterExerciseApi. The app is also published to Azure App Service. There are two endpoints:

Dealers: https://exeterexerciseapi20210612231239.azurewebsites.net/api/dealers

Customer Center: https://exeterexerciseapi20210612231239.azurewebsites.net/api/customers

## Launch:

Just download the code from github and run ng serve. If you encounter an issue please foloow the generated instructions below. The angular app is pointing to the web api on azure but if you wish to run it locally you can change the url to localhost and port of the web api in the angular code(just for the sake of the exercise the url is hard coded but it can be externalize).










# ExeterExercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
