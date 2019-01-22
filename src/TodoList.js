import React from 'react';
import PropTypes from 'prop-types';
import { StyledList, StyledItem, StyledDeleteIcon } from './styled';

const TodoList = ({ todos, deleteTodo }) => (
  <StyledList>
    {todos.map((item, id) => (
      <StyledItem key={item.id}>
        {item.text}
        <StyledDeleteIcon
          onClick={() => {
            deleteTodo(id);
          }}
        >
          x
        </StyledDeleteIcon>
      </StyledItem>
    ))}
  </StyledList>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
    }),
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
