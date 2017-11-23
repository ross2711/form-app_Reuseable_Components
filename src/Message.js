import React from 'react'
  // import React from './Input'

export default class Message extends React.Component {

  render() {
    let style = {
      backgroundColor: this.props.isError ? 'red' : 'green',
      display: this.props.display
      // display:this.state.display || 'none'
    }

    return ( < div style = {
      style
    } > {
      this.props.message
    } < /div>)
  }
}