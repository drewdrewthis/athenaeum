# Athenaeum - A React Component Library (RCL)

The RCL is a tool to help create and maintain robust design systems, allowing a developer to roll out higher quality, more consistent User Interfaces (UI) faster.

To see it in action, visit:
http://rcl.policygenius.com/v4.1.2/index.html

The RCL relies heavily on the following technologies. If you want to learn more about them and how to customize/configure the RCL, take a look at the documentation:

* [React](https://facebook.github.io/react/)
* [Styleguidist](https://github.com/styleguidist/react-styleguidist)
* [CSS Modules](https://github.com/css-modules/css-modules)
* [Post CSS](http://postcss.org/)
* [Sass](http://sass-lang.com/)
* [Webpack 2](https://webpack.js.org/)

We use [Babel](https://babeljs.io/) to compile our JS, which allows us to use the latest features of the language.


## Using the RCL locally
1. Clone the repo:

  `git clone git@github.com:policygenius/athenaeum.git`

2. Install dependencies

  `yarn`

3. Start the server

  `yarn start`

4. If you want to work on the RCL and another repo simultaneously, [symlink](https://yarnpkg.com/lang/en/docs/cli/link/) to Athenaeum while continuously watching and building to the `lib` directory, which is what is used to publish the package to npm:

  `yarn link && yarn build:publish:watch`

  and in your other repo:

  `yarn link 'athenaeum'`


## Using the NPM package

The RCL is published as a package called "Athenaeum", which can be found [here](https://www.npmjs.com/package/athenaeum).

Installing the package:

  `yarn add athenaeum` or `npm install athenaeum`


## Using an RCL component:

RCL components are React components, which are exported as a collection of modules you can import/require like you would any other JS dependency:

e.g.

```js
import { TextComponent, Button, Layout, Col } from 'athenaeum';

function MyReactComponent( props ) {
return (
  <div>
    <Layout>
      <TextComponent type={6}>I'm a header!</TextComponent>
      <Col>
        I'm a column!
      </Col>
      <Button>Submit!</Button>
    </Layout>
  </div>
  )
}

export default MyReactComponent;
```

The RCL gets exported with a bundled JS file and a CSS file. To use the RCL stylesheet, you can either import them directly into your project:

`import { TextComponent, Button, Layout, Col } from 'athenaeum';`

**OR** simply link to the latest version of the styles in your HTML:

`<link href="http://rcl.policygenius.com/v4.2.0/assets/styles.css" rel="stylesheet">`


## Running tests
_Note: Test will be run automatically as part of a githook on `git push`_

`yarn test`

OR

`yarn test [filepath]`


The RCL uses the following for testing. If you want to learn more about them and how to customize/configure the RCL, take a look at the documentation:

* [Jest](https://facebook.github.io/jest/)
* [Mocha](https://mochajs.org/)
* [Chai](http://chaijs.com/)


## Finding your way around

```html
/src
- atoms (Buttons, Icons, Text, etc.)
- molecules (Form Fields, Lists, Image Asides, etc.)
- organisms (Forms, Tables, etc.)
- templates (Headers, Navigators, Footers, etc.)
```

Our RCL is structured around the concepts put forth by [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/). The smallest components are **ATOMS**, which are used to make **MOLECULES**, which are used to make **ORGANISMS**, which are lastly used to make **TEMPLATES**.


## Contributing

### Coding styles and standards

Most of our styles are enforced by linters ([stylelint](https://github.com/stylelint/stylelint), [eslint](http://eslint.org/), [eslint-plugin-markdown](https://github.com/jmcolella/eslint-plugin-markdown)), which must follow for the builds to pass.

For anything not specifically addressed in the linters, use Airbnb's styleguides:

- [JS](https://github.com/airbnb/javascript)
- [React/JSX](https://github.com/airbnb/javascript/tree/master/react)
- [CSS](https://github.com/airbnb/css)


### Continuous Integration and Deployment

We use [Buildkite](https://buildkite.com/policygenius) as a CI server. Every commit triggers a build with Buildkite that will run a series of checks and tests before giving a green light to merge to master.

There is 1 pipelines associated with this project:

[athenaeum pipeline](https://buildkite.com/policygenius/athenaeum) - builds the project, runs test. When a branch is then merged to master, a new build is triggered. After a build on master passes all of its, it will need to be manually unblocked before being deployed to production and published to npm. This manual unblock is a prompt requiring you to bump the package version, for which we use [Semantic Versioning](http://semver.org/).

### Code reviews

Your branch code should always be reviewed before it gets merged to `master`. **Do not work on the `master` branch.**

[Here's a nice guide on how to Code Review.](https://github.com/thoughtbot/guides/tree/master/code-review#code-review)

***

The RCL and the Athenaeum project is a product by [PolicyGenius](https://www.policygenius.com/).