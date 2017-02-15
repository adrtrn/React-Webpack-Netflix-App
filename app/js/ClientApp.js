import React from 'react'
import ReactDOM from 'react-dom'
import Title from './Title'

var div = React.DOM.div

var TitleFactory = React.createFactory(Title)

var MainComponent = React.createClass({
  render: function () {
    return (
      div(null,
        TitleFactory({title: 'props brah', color: 'peru'}),
        TitleFactory({title: 'props yoppph', color: 'blue'}),
        TitleFactory({title: 'props homie', color: 'tomato'}),
        TitleFactory({title: 'props homie', color: 'rebeccapurple'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MainComponent), document.getElementById('app'))
