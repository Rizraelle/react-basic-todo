import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { StyledHeader, StyledContainer } from './styled';

library.add(faTrash, faEdit, faCheck);

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
      todos: this.state.todos.filter(item => item.id !== id),
    });
  };

  editTodo = ({ text, id }) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          item.text = text;
        }
        return item;
      }),
    });
  };

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
