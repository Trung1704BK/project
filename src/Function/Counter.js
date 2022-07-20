import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div class='navbar'>
          <a href='#home'>Home</a>
          <a href='#news'>News</a>
          <div class='dropdown'>
            <button class='dropbtn'>
              Dropdown
              <i class='fa fa-caret-down'></i>
            </button>
            <div class='dropdown-content'>
              <a href='#'>Link 1</a>
              <a href='#'>Link 2</a>
              <a href='#'>Link 3</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;