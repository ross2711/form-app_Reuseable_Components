import React from 'react'

export default class Input extends React.Component {
  getData() {
    var data = this.refs.data.value.trim()
    this.props.getData(data);
  }

  render() {
    return <input onChange = {
      this.getData.bind(this)
    }
    ref = "data" / >
  }
}