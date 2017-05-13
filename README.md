# Overview
This is an introduction to JavaScript testing using Mocha and Karma for the amazing developers at Resilient Coders.

We'll go over how to setup your environment and some simple testing techniques

To avoid the potential catastrophes of live coding, this repo uses a series of feature branches that can be used to capture various phases of the [development process](#development-process).

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

`git checkout -b branch-name`

e.g.

`git checkout setup-env`

## Branches

### setup-env
This branch shows the bare bones test environment and two simple tests, one passing and one failing, in `dummy-spec.js`.

### first-test
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

# Going Forward
Here are some things to think about as you go forward

* What happens when one of the operands is null
* What happens if one of the operands is not a number or not a string that can be converted to a number
* What happens if you divide by zero
* What are the maximum size of numbers that you can operate on, see [MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
* How does your calculator deal with floating point numbers and number of digits
* What other operations can you add to your calculator, sqrt, power, etc

Your tests are the specifications of your code, that's why they are called 'specs'.  They are a form of documentation

# Further Reading

## Mocha
I strongly encourage you to read the full documentation for [Mocha](https://mochajs.org/), especialy when working with

* [promises](https://mochajs.org/#working-with-promises)
* [asynchronous code](https://mochajs.org/#asynchronous-code)

Check out the [Mocha Wiki](https://github.com/mochajs/mocha/wiki) for more in depth topics

## Expect.js
[Expect.js](https://github.com/mjackson/expect) is a great tool for writing more expressive expectations, and also includes [spies](https://github.com/mjackson/expect#spies) for mocking out dependencies to your code.  Spies and mocks are beyond the scope of the discussion here, but are a way to isolate your code under test from dependencies on other code.  Using them can make your tests more robust and less likely to break if other, unrelated code changes.

## Nock.js
[Nock](https://github.com/node-nock/nock) allows you to stub out HTTP requests to external services in your tests.  It is general bad to make external requests in your tests for a few reasons

* makes your tests really slow
* may cause you to hit rate limits on your APIs

## Chai
[Chai](http://chaijs.com/) is another assertion library that can make your tests more expressive

## Enzyme
[Enzyme](http://airbnb.io/enzyme/) is a JavaScript testing utility for testing React code

# References
There are a lot of great references and tutorials out there, and I used the following references in preparation for this presentation

* https://sean.is/writing/client-side-testing-with-mocha-and-karma/
* http://www.bradoncode.com/blog/2015/02/27/karma-tutorial/
* http://www.syntaxsuccess.com/viewarticle/writing-jasmine-unit-tests-in-es6
* https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
* https://x-team.com/blog/setting-up-javascript-testing-tools-for-es6/

I would also encourage you to learn more about test driven development (TDD) and see if it is something for you.

* https://semaphoreci.com/community/tutorials/getting-started-with-tdd-in-react
* http://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/
