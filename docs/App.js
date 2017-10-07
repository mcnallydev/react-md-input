import React, { Component } from 'react';
import Input from '../dist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
    };
  }

  onChange(event, key) {
    this.setState({
      [key]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <div>
          <div>Default</div>
          <Input
            label="Name"
            type="text"
            value={this.state.a}
            onChange={ (e) => this.onChange(e, 'a') }
          />
        </div>

        <div>
          <div>Decimal</div>
          <Input
            label="Decimal"
            type="text"
            pattern={'patternDecimal'}
            value={this.state.b}
            onChange={ (e) => this.onChange(e, 'b') }
          />
        </div>

        <div>
          <div>Integer</div>
          <Input
            label="Integer"
            type="text"
            pattern={'patternInteger'}
            value={this.state.c}
            onChange={ (e) => this.onChange(e, 'c') }
          />
        </div>

        <div>
          <div>Number</div>
          <Input
            label="Number"
            type="text"
            pattern={'patternNumber'}
            value={this.state.d}
            onChange={ (e) => this.onChange(e, 'd') }
          />
        </div>

        <div>
          <div>Error</div>
          <Input
            error="I am a error."
            label="Error"
            type="text"
            value={this.state.e}
            onChange={ (e) => this.onChange(e, 'e') }
          />
        </div>
      </div>
    );
  }
}

export default App;
