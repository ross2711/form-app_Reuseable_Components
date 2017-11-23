// Create a form that gets the username from an input, and it displays one of the following message/background-color depending on the user input.
// if the username has less than 8 characters:
// - background : red
// - message:”the username must be at least of 8 characters
// if the username doesn’t contain upper case and lower case
// - background : red
// - message:”the username must contain both upper and lower case characters.
// otherwise:
// - background : green
// - message: welcome back USERNAME
// Requirements:
// - The message box should be originally not visible
// - The message should disappear after 2 seconds of being displayed
import React from 'react'
  // import Button from './Button'
import Input from './Input'
import Message from './Message'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isError: true,
      message: '',
      display: '',
      data: ''
    };

    this.getData = this.getData.bind(this)
  }
  getData(data) {
    this.setState({
      data
    })

  }
  handleClick() {

    var text = this.state.data

    let errors = [];

    var upper = 0;
    var lower = 0;
    var split = text.split('');
    split.forEach(function(el) {
      if (el === el.toUpperCase()) {
        upper++
      } else {
        lower++
      }
    });

    setTimeout(() => {
      this.setState({
        display: 'none'
      });
    }, 2000);

    if (text.length < 8) {
      errors.push('too short');
      //this.setState({color:'green', message:'great'})
      //} else {
      //this.setState({color: 'red', message:'too short'})
    }

    if (upper > 0 && lower > 0) {
      this.setState({
        color: 'green',
        message: 'great'
      })
    } else {
      errors.push('the username must contain both upper and lower case characters');
      //this.setState({color: 'red', message:'the username must contain both upper and lower case characters'})
    }

    this.setState({
      isError: !!errors.length, //!! converts number to boolean
      message: errors.length ? errors[0] : 'great'
    });
  }

  render(){
    return(
      <div>
          <Input getData={this.getData}/>
          <button onClick={this.handleClick.bind(this)}>click</button>
          <Message
              message={this.state.message}
              isError={this.state.isError}
              display={this.state.display}
          />
      </div>
    )
  }
}