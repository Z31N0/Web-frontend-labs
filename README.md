# Web-frontend-labs

A collection of weekly front-end development labs and exercises, tracking progress through a front-end curriculum.

## What's inside

The `src` folder is organized week by week (`week1.1` through `week9.2`, plus an extra project), with each folder holding the exercise for that session. Topics progress from HTML/CSS/JS fundamentals toward more advanced front-end concepts as the weeks go on.

Alongside the exercises, the repo includes tooling configuration that goes beyond just writing code:

- **Linting** - custom `linter-configs` and an ESLint setup to enforce code style
- **Validation** - a `.vnuignore` file for the Nu HTML Checker, with generated `reports`
- **Code quality** - a `sonar-project.properties` file for SonarQube static analysis

## Why it's set up this way

Rather than just dumping exercise files, this repo also reflects practicing real front-end workflow habits — linting, HTML validation, and static analysis — on top of the actual weekly coding tasks.

## Tech stack

- HTML / CSS / JavaScript
- ESLint
- SonarQube

## Structure

```
src/
  week1.1/ ... week9.2/
  Extra-project/
linter-configs/
reports/
package.json
sonar-project.properties
```
