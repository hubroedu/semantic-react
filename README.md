


Semantic React components (In progress)
=========================

This package makes it easy to use the excellent [Semantic-UI](http://semantic-ui.com) css framework in React. It is __heavily__ borrowed/inspired by [react-semantify](https://github.com/jessy1092/react-semantify), but for our use it was a bit too basic, and lacking in sensible sub-components and wrappers.

**Note!** You need to bring your own semantic-ui files, as they are not included.


## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Installation](#installation)
- [Philosophy](#philosophy)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Installation

In a Meteor app directory, enter:

```
$ meteor add hubroedu:semantic-react
```

## Philosophy

General guidelies for components:

* Components are named after their semantic-ui equivalent. "ui segment" is `<Segment>` and "ui progress" is `<Progress>`. Some modules have exceptions.
* Most variations of components should have a separate prop for that variation, like `size="large"`, `color="blue"` or `disabled={true}`. This makes it easier to programmatically change the compoent.
* Modules are initialized by default. On a `<Progress>` component, the jquery initializer `.progress()` will be called.


## Docs

TODO

## Tests

TODO