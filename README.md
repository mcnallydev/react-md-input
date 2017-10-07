# react-md-input

React Component Material Design Input.

## Installation

    $ yarn add react-md-input

## Example
```javascript
import Input from 'react-md-input';

onChange(event) {
  this.setState({
    name: event.target.value,
  });
}

<Input
  label="Name"
  type="text"
  value={this.state.name}
  onChange={ (e) => this.onChange(e) }
/>
```

## Props

Name | Description | Default/Required | Type
------|-------------|----------|-----------
error | To show error message. | optional | string
label | To show label. | required | string
type | Input type attribute. | optional | string
value | Input value attribute. | required | string
pattern | Input value validation. | optional | string

## Patterns

* patternDecimal
* patternInteger
* patternNumber