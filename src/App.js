import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import SimpleStorage from 'react-simple-storage';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { StyledHeader, StyledContainer } from './styled';

library.add(faTrash, faEdit, faCheck);

const nanoid = require('nanoid');

class App extends Component {
  state = {
    todos: {},
  };

  addTodo = (text) => {
    const { todos } = this.state;
    const itemId = `item ${nanoid()}`;
    if (text.length > 0) {
      this.setState({
        todos: { ...todos, [itemId]: { text, id: itemId } },
      });
    }
  };

  deleteTodo = (id) => {
    const { todos } = this.state;
    delete todos[id];
    this.setState({
      todos,
    });
  };

  editTodo = ({ text, id }) => {
    const { todos } = this.state;
    this.setState({
      todos: { ...todos, [id]: { id, text } },
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <StyledContainer>
        <SimpleStorage parent={this} />
        <StyledHeader>Todo List</StyledHeader>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo} />
      </StyledContainer>
    );
  }
}

export default App;
