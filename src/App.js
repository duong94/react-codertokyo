import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
class App extends Component {
  constructor() {
    super();
    this.state.todoItems = [
      {title: 'Mua bim bim', isComplete: true},
      {title: 'Đi đá bóng'},
      {title: 'Đi đổ xăng'}
    ]; 
  }

OnItemClicked() {

}

  render() {
    return <div className="App">
        {this.todoItems.length > 0 && this.todoItems.map((item, index) => (
            <TodoItem key={index} item={item} onClick={this.onItemClicked} />
        ))}
      {this.todoItems.length === 0 && 'Nothing here'}
      </div>;
  }
}

export default App;
