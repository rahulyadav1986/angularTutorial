# Employee Managemeny CRM

# Project Details 
This is a simple Employee Management CRM, have Login, Register, Forgot Password Component with User Module. 

# How to Run
1. First pull my Project files, then run this command "npm install" then  run "ng s -o"
2. For run this project you need to install json-server for local api so that you need to install "npm i -g json-server"
3. Need to install for sorting, serching and Paginating 
   a.npm i ng2-search-filter
   b.npm i ng2-order-pipe
   c.npm i ngx-pagination
4. Have Pwa Functionality so that need to install
   a.ng add @angular/pwa@13

# How to access the pages(SPA)

1. First i load the login page, you have found register, forgot password from there
2. When you click on Register button then navigate to the dashboard page, from there you will found employee data table , all data fetch from db.json file from local database. This things created by sperate class with service.
3. while you run the angular project. That is "ng s- o", also you need to run from angular root folder "json-server --watch db.json". 

# Note
[If you not run this json-server Cli then the data not load in dashboard page]



# Crm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
