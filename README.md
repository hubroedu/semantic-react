


Semantic React components
=========================

**WARNING** Alpha, missing components, documentation, tests and functionality

This package makes it easy to use the excellent [Semantic-UI](http://semantic-ui.com) css framework in React. It is __heavily__ borrowed/inspired by [react-semantify](https://github.com/jessy1092/react-semantify), but with some tweaks and additions. Having a meteor package was also a lot more convenient than messing around with browserify.

**Note!** You need to bring your own semantic-ui files, as they are not included.


## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Installation](#installation)
- [Overview](#overview)
- [Docs](#docs)
  - [Elements](#elements)
    - [Input](#input)
    - [Flag](#flag)
    - [Icon](#icon)
    - [Step](#step)
  - [Collections](#collections)
    - [Form](#form)
    - [Grid / Column](#grid--column)
    - [Table](#table)
    - [Menu](#menu)
  - [Views](#views)
    - [Card](#card)
    - [Item](#item)
    - [Statistic](#statistic)
  - [Modules](#modules)
    - [Accordion](#accordion)
    - [Checkbox](#checkbox)
    - [Radio Input](#radio-input)
    - [Dropdown](#dropdown)
    - [Progress](#progress)
    - [Tab](#tab)

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

The aim of this project is to make the components as intuitive as possible. Most components work the same way, and if they don't, open an issue!

Refer to [Semantic UI docs](http://semantic-ui.com/) for a complete reference to all variations of components.




---
### Elements
---

#### Input

```html
<Input name="username" placeholder="Username here" label="Username" />
<Input id="my-age" name="age" type="number" min="1" max="110" step="1" label="Your age" />
<Input name="about" type="textarea" rows="10" label="About you" />
```
Renders to:
```html
<label for="input_username">Username</label>
<input id="input_username" type="text" name="username" placeholder="Username here" />

<label for="my-age">Your age</label>
<input id="my-age" type="number" name="age" min="1" max="110" step="1" />

<label for="input_about">About you</label>
<textarea id="input_about" name="about" rows="10" />
```

You can add buttons, icons and labels to the input.

```html
<Input name="search" className="left icon action" placeholder="Search term">
  <Icon icon="search" />
  <Button>Search</Button>
</Input>
```

Common props:

* *type*: text/textarea/number (range is a separate component)
* *name*: The built in name property of the input
* *id*: The id property will be added automatically if not specified, generated as "input_" + name
* *label*: Adds a label to the input
* *placeholder*: Placeholder text for text/textarea
* *onChange*: Hooks to the onChange handler, takes a callback function with three arguments:
    * name: The name prop
    * value: New value
    * event: Synthetic event

Textarea props:

* *rows*: Number of rows in a textarea input

Number props:

* *min*
* *max*
* *step*


#### Flag

```html
<Flag flag="no" />
```
Renders to
```html
<i class="flag no"></i>
```

Props:
* *flag*: Language code of flag



#### Icon

```html
<Icon icon="star" />
```
Renders to
```html
<i class="star icon"></i>
```

Props:
* *icon*: Name of the font awesome icon
* *size*: Size variation
* *loading*: Is loading boolean
* *disabled*: Disabled boolean


#### Step


```html
<Steps>
  <Step completed={true}> Step 1 </Step>
  <Step active={true}> Step 2 </Step>
  <Step disabled={true}> Step 3 </Step>
  <Step disabled={true}> Step 4 </Step>
</Steps>
```
Renders to
```html
<div class="ui steps">
  <div class="step completed"  > Step 1 </div>
  <div class="step active"> Step 2 </div>
  <div class="step disabled"> Step 3 </div>
  <div class="step disabled"> Step 4 </div>
</divb>
```



---
### Collections
---

#### Form

This component will additionally make sure that silly submits cause a refresh, so all propagation is stopped. Get access to the submit event by adding a `onSubmit` prop with your handle function.

```html
<Form>
  ...
</Form>
```
Renders to
```html
<form class="ui form">
  ...
</form>
```

#### Grid / Column

```html
<Grid>
  <Column>
  
  </Column>
  <Column>
  
  </Column>
</Grid>
```
Renders to
```html
<div class="ui grid">
  <div class="column"></div>
  <div class="column"></div>
</div>
```

#### Table

```html
<Table>
  ...
</Table>
```
Renders to
```html
<table class="ui table">
  ...
</table>
```

#### Menu

```html
<Menu>
  ...
</Menu>
```
Renders to
```html
<div class="ui menu">
  ...
</div>
```



---
### Views
---


#### Card

```html
<Cards>
  <Card>
    
  </Card>
  <Card>
  
  </Card>
</Cards>
```
Renders to
```html
<div class="ui cards">
  <div class="card">
    
  </div>
  <div class="card">
  
  </div>
</div>
```

#### Item

```html
<Items>
  <Item>
    
  </Item>
  <Item>
  
  </Item>
</Items>
```
Renders to
```html
<div class="ui items">
  <div class="item">
    
  </div>
  <div class="item">
  
  </div>
</div>
```

#### Statistic

This particular element has a bit of extra functionality.

```html
<Statistic value={3} label="Label" />
```
Renders to
```html
<div class="ui statistic">
  <div class="value">3</div>
  <div class="label">Label</div>
</div>
```

```html
<Statistic value={3} formatter={x => x * 2} label="Label" labelAbove="above" />
```
Renders to
```html
<div class="ui statistic">
  <div class="label">Above</div>
  <div class="value">6</div>
  <div class="label">Label</div>
</div>
```


------
### Modules
---

Modules are initialized by default, which is the same as passing the prop `init={true}`. To avoid initialization, pass `false` instead.

To configure a module, pass the configuration object to `init`.


#### Accordion

```html
<Accordion className="styled fluid">
  <Title>
    Tab 1
  </Title>
  <Content>
    Tab 1 content
  </Content>
  <Title>
    Tab 2
  </Title>
  <Content>
    Tab 2 content
  </Content>
  <Title>
    Tab 3
  </Title>
  <Content>
    Tab 3 content
  </Content>
  <Title>
    Tab 4
  </Title>
  <Content>
    Tab 4 content
  </Content>
</Accordion>
```

or if you have dynamic content

```html
<Accordion>
  {puppies.map(puppy => {
    return [
      <Title key={puppy.name}>
        <Icon icon="paw" className="right floated" />
        <Icon icon="dropdown" />
      
        {puppy.name}
      </Title>,
      <Content key={puppy.name + "content"}>
        <PuppyDetails puppy={puppy} />
      </Content>
    ];
  })}
</Accordion>
```

#### Checkbox

```html
<Checkbox
  onChange={this.handleChange}
  className="toggle"
  checked={true}
  name="kittens"
  label="Kittens" />
```
Renders to
```html
<div class="ui toggle  checkbox checked" color="null">
  <input type="checkbox" name="kittens" tabindex="0" class="hidden">
  <label>Kittens</label>
</div>
```


#### Radio Input

We have implemented a separate component for this variant of Checkbox.
It constsists of a RadioGroup, with several RadioInput elements.


```html
<RadioGroup name="fruit" defaultValue="banana" onChange={this.fruitHandler}>
  <RadioInput value="banana" label="Banana" />
  <RadioInput value="apple" label="Apple" />
  <RadioInput value="pear" label="Pear" />
</RadioGroup>
```
Renders to
```html
<div class="field">
  <div class="field">
    <div class="ui radio checkbox checked">
      <input type="radio" class="hidden" value="banana" name="fruit" tabindex="0">
      <label data-radio-name="fruit">
        Banana
      </label>
    </div>
  </div>
  <div class="field">
    <div class="ui radio checkbox">
      <input type="radio" class="hidden" value="apple" name="fruit" tabindex="0">
      <label data-radio-name="fruit">
        Apple
      </label>
    </div>
  </div>
  <div class="field">
    <div class="ui radio checkbox">
      <input type="radio" class="hidden" value="pear" name="fruit" tabindex="0">
      <label data-radio-name="fruit">
        Pear
      </label>
    </div>
  </div>
  
</div>
```



#### Dropdown

```html
<Dropdown
  name="name"
  label="Label"
  onChange={(newValue, name, element) => console.log(newValue)}
  default="Choose category"
  defaultValue="no"
  options={[
    { value: "no", name: "Norwegian"},
    { value: "en": name: "English" }
  ]}
  />
```
Renders to
```html
<div name="language" default="" class="ui link item pointing  dropdown " tabindex="0">
  <input type="hidden" name="language" value="no">
  <i class="dropdown icon"></i>
  <div class="text">
    Norwegian
  </div>
  <div class="menu" tabindex="-1">
    <div class="item active selected" data-value="no">
      Norwegian
    </div>
    <div class="item" data-value="en">
      English
    </div>
  </div>
</div>

```


#### Progress

```html
<Progress
  label="Hello"
  total={100}
  value={50} />
```
Renders to
```html
<div class="ui progress">
  <div class="bar">
    <div class="progress"></div>
  </div>
  <div class="label">Hello</div>
</div>
```


#### Tab

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
