import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledForm, StyledInput, StyledButton } from './styled';

class TodoForm extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { text } = this.state;
    const { addTodo } = this.props;
    addTodo(text);
    this.setState({
      text: '',
    });
  };

  onChange = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    const { text } = this.state;
    return (
      <StyledForm onSubmit={this.onSubmit}>
        <StyledInput
          id="todo-input"
          name="text"
          placeholder="New todo?"
          value={text}
          onChange={this.onChange}
        />
        <StyledButton>Submit</StyledButton>
      </StyledForm>
    );
  }
}

export default TodoForm;
