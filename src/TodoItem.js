import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledItem, StyledText, StyledIcon, StyledInput, StyledWrapper } from './styled';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
    this.input = React.createRef();
  }

  setEditState(isEditing) {
    this.setState({
      isEditing: true,
    });
  }

  onEditSubmit = event => {
    const { editTodo } = this.props;
    this.setState({
      isEditing: false,
    });
    editTodo({ text: this.input.value, id: this.props.id });
  };

  render() {
    const { isEditing } = this.state;
    return (
      <StyledItem>
        <StyledText>
          {this.props.text}
          {isEditing && (
            <StyledWrapper>
              <StyledInput
                defaultValue={this.props.text}
                ref={value => {
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
            this.props.deleteTodo(this.props.id);
          }}
        >
          <FontAwesomeIcon icon="trash" />
        </StyledIcon>
      </StyledItem>
    );
  }
}

TodoItem.propTypes = {
  handleEdit: PropTypes.func,
  id: PropTypes.string,
  text: PropTypes.string,
};

export default TodoItem;
