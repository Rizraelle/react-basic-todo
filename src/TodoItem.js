import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  StyledItem, StyledText, StyledIcon, StyledInput, StyledWrapper,
} from './styled';

class TodoItem extends Component {
  static propTypes = {
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
    this.input = React.createRef();
  }

  setEditState() {
    this.setState({
      isEditing: true,
    });
  }

  onEditSubmit = () => {
    const { editTodo, id } = this.props;
    this.setState({
      isEditing: false,
    });
    editTodo({ text: this.input.value, id });
  };

  render() {
    const { isEditing } = this.state;
    const { deleteTodo } = this.props;
    const { text } = this.props;
    const { id } = this.props;
    return (
      <StyledItem>
        <StyledText>
          {text}
          {isEditing && (
            <StyledWrapper>
              <StyledInput
                defaultValue={text}
                ref={(value) => {
                  this.input = value;
                }}
                autoFocus
              />
              <StyledIcon onClick={this.onEditSubmit}>
                <FontAwesomeIcon icon="check" />
              </StyledIcon>
            </StyledWrapper>
          )}
        </StyledText>
        <StyledIcon
          onClick={() => {
            this.setEditState();
          }}
        >
          <FontAwesomeIcon icon="edit" />
        </StyledIcon>
        <StyledIcon
          onClick={() => {
            deleteTodo(id);
          }}
        >
          <FontAwesomeIcon icon="trash" />
        </StyledIcon>
      </StyledItem>
    );
  }
}

export default TodoItem;
