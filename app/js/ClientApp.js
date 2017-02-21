/* global React ReactDOM */
import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './Title.js'

var MainComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title='props brah' color='peru' />
        <MyTitle title='props yoppph' color='blue' />
        <MyTitle title='props homie' color='tomato' />
        <MyTitle title='props homie meow' color='rebeccapurple' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MainComponent), document.getElementById('app'))
