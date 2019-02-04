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

  addTodo = (text) => {
    const { todos } = this.state;
    if (text.length > 0) {
      this.setState({
        todos: [...todos, { text, id: `item ${nanoid()}` }],
      });
    }
  };

  deleteTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(item => item.id !== id),
    });
  };

  editTodo = ({ text, id }) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((item) => {
        if (item.id === id) {
          return { id, text };
        }
        return item;
      }),
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <StyledContainer>
        <StyledHeader>Todo List</StyledHeader>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo} />
      </StyledContainer>
    );
  }
}

export default App;
