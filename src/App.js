import React, { Component } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoEdit from './TodoEdit';
import { StyledHeader, StyledContainer } from './styled';

const nanoid = require('nanoid');

class App extends Component {
  state = {
    todos: [],
  };

  addTodo = text => {
    if (text.length > 0) {
      this.setState({
        todos: [...this.state.todos, { text, id: `item ${nanoid()}` }],
      });
    }
  };

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter((_, i) => i !== id),
    });
  };

  editTodo = text => {};

  render() {
    return (
      <StyledContainer>
        <StyledHeader>Todo List</StyledHeader>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo} />
      </StyledContainer>
    );
  }
}

export default App;
