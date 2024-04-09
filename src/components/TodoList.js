import React from 'react';
import '../assets/styles/TodoList.css'

function TodoList(props) {
  return React.createElement(
  'ul',
  {className:"todoList"},
  props.children
);
}

export { TodoList };
