import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import { StyledList } from './styled';

const TodoList = ({ todos, deleteTodo, editTodo }) => (
  <StyledList>
    {Object.values(todos).map(item => (
      <TodoItem
        key={item.id}
        id={item.id}
        text={item.text}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    ))}
  </StyledList>
);

TodoList.propTypes = {
  todos: PropTypes.objectOf(
    PropTypes.shape({
      text: PropTypes.string,
    }),
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodoList;
