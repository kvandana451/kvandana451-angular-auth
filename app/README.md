# App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0. But Developed using Angular 16

Key Features:
Implemented canActivate Guard to access Pages of the application.<br>
Only Authenticated Users (in my app users who are assigned with a role are authenticated users) can access the pages.[authGuard]<br>
Not all authenticated users can access all the pages[adminGuard]. So i have used Two Guards [adminGuard,authGuard] for canActivate.<br>
Depending upon the role there are separate pages to be accessed

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
