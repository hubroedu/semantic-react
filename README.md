


Semantic React components
=========================

**WARNING** Alpha, missing components, documentation, tests and functionality

This package makes it easy to use the excellent [Semantic-UI](http://semantic-ui.com) css framework in React. It is __heavily__ borrowed/inspired by [react-semantify](https://github.com/jessy1092/react-semantify), but with some tweaks and additions. Having a meteor package was also a lot more convenient than messing around with browserify.

Although this is a young package, we are already using it in our internal projects, and you can see an example of this package in use in [this project](https://github.com/jorgeer/colony).

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

## Overview

General guidelies for components:

* Components are named after their semantic-ui equivalent. `ui segment` is `<Segment>` and `ui progress` is `<Progress>`. Some modules have exceptions.
* Most variations of components should have a separate prop for that variation, like `size="large"`, `color="blue"` or `disabled={true}`. This makes it easier to programmatically change the compoent. You can place this in the className prop if you want though.
* Modules are initialized by default. On a `<Progress>` component, the jquery initializer `.progress()` will be called.
* If it can be grouped, it has a group component. Example being 
```html
<Buttons>
    <Button>Action</Button>
    <Button>Another action</Button>
</Buttons>
```
and
```html
<Cards>
    <Card>...</Card>
    <Card>...</Card>
</Cards>
```

## Docs

The aim of this project is to make the components as intuitive as possible, so only the exeptions will be specifically mentioned. Most components work the same way, and if they don't, open an issue!

Refer to [Semantic UI docs](http://semantic-ui.com/) for a complete reference to everything.




---
### *Elements*
---

###Input

```html
<Input name="username" placeholder="Username here" label="Username" />
<Input name="age" type="number" min="1" max="110" step="1" label="Your age" />
```
Renders to:
```html
<label>Username</label>
<input type="text" name="username" placeholder="Username here" />

<label>Your age</label>
<input type="number" name="age" min="1" max="110" step="1" />
```

You can add buttons, icons and labels to the input.

```html
<Input name="search" className="left icon action" placeholder="Search term">
  <Icon icon="search" />
  <Button>Search</Button>
</Input>
```

#####Common props:

* *type*: text/textarea/number (range is a separate component)
* *name*: The built in name property of the input
* *label*: Adds a label to the input
* *placeholder*: Placeholder text for text/textarea
* *onChange*: Hooks to the onChange handler, takes a callback function with three arguments:
    * name: The name prop
    * value: New value
    * event: Synthetic event

#####Textarea props:

* *rows*: Number of rows in a textarea input

#####Number props:

* *min*
* *max*
* *step*




###Flag

TODO



###Icon

TODO



###Rail

TODO


###Step





---
### *Collections*
---

###Form

TODO

###Grid

TODO

###Table

TODO

###Menu

TODO



---
### *Views*
---


###Ads

TODO

###Card

TODO

###Item

TODO

###Statistic

TODO




------
### *Modules*
---

Modules are initialized by default, which is the same as passing the prop `init={true}`. To avoid initialization, pass `false` instead. 

To configure a module, pass the configuration object to `init`.


###Accordion

TODO

### Checkbox

TODO

### Dropdown

TODO

### Progress

TODO

### Tab

Tabs have been given some extra functionality. It is now divided into three components, Tab, TabContent and TabMenu. The TabMenu contains the Tabs, and handles the clicking and showing of TabContent.

```html
<TabMenu className="secondary pointing tabular top attached">
    <Tab tab="marketplace" active={true}>Marketplace</Tab>
    <Tab tab="caravans">Caravans</Tab>
    <Tab tab="trading">Trading</Tab>
    <Tab tab="connected-markets">Connected markets</Tab>
</TabMenu>

<TabContent tab="marketplace" active={true}>
  .... something
</TabContent>

<TabContent tab="caravans">
  .... something else
</TabContent>
```





## Tests

TODO