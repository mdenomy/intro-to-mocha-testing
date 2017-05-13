# Overview
This is an introduction to JavaScript testing using Mocha and Karma for the amazing developers at Resilient Coders.

We'll go over how to setup your environment and some simple testing techniques

To avoid the potential catastrophes of live coding, this repo uses a series of tags that can be used to capture various phases of the [development process](#development-process).

# Setting up the environment
Run `npm install` to set up the dependencies

# Running the tests
Run `npm run tests` to run the tests

# Tools

## Mocha
[Mocha](https://mochajs.org/) is a testing _framework_.  It provides a domain specific language (DSL) for allowing you to write tests.

## Karma
[Karma](https://karma-runner.github.io) is a test _runner_.  It's job is to spin up a web server and provide an environment to run the tests against your source code.  Karma can run your tests against several different browsers, e.g. Chrome, Firefox, or even against "headless browsers" like [PhantomJS](http://phantomjs.org/)

## Webpack
[Webpack](https://webpack.github.io/) is a _module bundler_.  It's job is take all the modules your application needs and bundle them into a single bundle (or a few bundles) that can be loaded into the browser.  Though not really part of the test tools, it does make our lives easier (and sometimes harder) when developing code.

# Development Process
To avoid the hazards of live coding, this repo has a series of feature branchs in git that allow you to quickly jump to various phases in the development process

To jump to a particular stage, run
`git checkout -b <branch-name>

## Branches

### setup-env
This branch shows the bare bones test environment and two simple tests, one passing and one failing, in `dummy-spec.js`.

### #first-test
This branch gives us our first real test, that the calculator can add two numbers.  It fails, why????

### first-passing-test
This branc implements the `add` function of the calculator, making our previously failing test pass

### more-tests
Add more specs (subtract, multiply, divide) for the basic functions of the calculator

### basic-operations
Implement subtract, multiply, divide for the calculator

### before-hook
[Before hooks](https://mochajs.org/#hooks) run before the tests in your suite and are used to set up common test conditions.  There are also after hooks for any needed cleanup

### working-with-strings
Add the notion of [context](https://mochajs.org/#bdd) to describe a different set of conditions to test under.  Makes the tests more expressive and logically grouped

Making the tests pass is an exercise for the reader.

**Remember for look for opportunities to refactor your code as you go**

# Additional things to test for/implement/think about going forward

* What happens when one of the operands is null
* What happens if one of the operands is not a number or not a string that can be converted to a number
* What happens if you divide by zero
* What are the maximum size of numbers that you can operate on, see [MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
* How does your calculator deal with floating point numbers and number of digits
* What other operations can you add to your calculator, sqrt, power, etc

Your tests are the specifications of your code, that's why they are called 'specs'.  They are a form of documentation

