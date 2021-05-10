import React from 'react';
import ReactDOM from 'react-dom';
import Component from '../../src/TodoList';

ReactDOM.hydrate(<Component />, document.querySelector('#root'));