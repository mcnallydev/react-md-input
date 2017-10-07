/* eslint no-eval: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Group, InputTag, Highlight, Bar, Label, Error } from './style';

// types
import PatternDecimal from '../patterns/pattern-decimal';
import PatternInteger from '../patterns/pattern-integer';
import PatternNumber from '../patterns/pattern-number';

class Input extends Component {
  constructor(props) {
    super(props);

    // init state
    this.state = {
      error: props.error,
      value: props.value,
    };

    // instance patterns
    this.patternDecimal = PatternDecimal;
    this.patternInteger = PatternInteger;
    this.patternNumber = PatternNumber;
  }

  /**
   * React Component componentWillReceiveProps
   * @param {*} nextProps 
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      error: nextProps.error,
      value: nextProps.value,
    }, () => {
      if (this.props.pattern !== '') {
        // instance class from types
        if (!this[this.props.pattern].is(this.state.value)) {
          this.setState({
            value: this.state.value.substring(0, this.state.value.length - 1),
          });
        }
      }
    });
  }

  /**
   * Render or not error
   */
  renderError() {
    let render = (null);
    if (this.state.error !== '') {
      render = (
        <Error>
          {this.state.error}
        </Error>
      );
    }
    return render;
  }

  /**
   * React Component render
   */
  render() {
    return (
      <Container>
        <Group>
          <InputTag
            type={this.props.type}
            onChange={this.props.onChange}
            value={this.state.value}
          />
          <Highlight />
          <Bar />
          <Label>
            {this.props.label}
          </Label>
        </Group>
        {this.renderError()}
      </Container>
    );
  }
}

/**
 * React Component defaultProps
 */
Input.defaultProps = {
  error: '',
  label: '',
  type: 'text',
  value: '',
  pattern: '',
};

/**
 * React Component propTypes
 */
Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  pattern: PropTypes.oneOf([
    '',
    'patternDecimal',
    'patternInteger',
    'patternNumber',
  ]),
};

export default Input;
