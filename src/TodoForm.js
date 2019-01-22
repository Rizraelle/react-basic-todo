import React, { Component } from 'react';
import { StyledForm, StyledInput, StyledButton } from './styled';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({
      text: '',
    });
  };

  onChange = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <StyledForm onSubmit={this.onSubmit}>
        <StyledInput
          id="todo-input"
          name="text"
          placeholder="New todo?"
          value={this.state.text}
          onChange={this.onChange}
        />
        <StyledButton>Submit</StyledButton>
      </StyledForm>
    );
  }
}

export default TodoForm;
