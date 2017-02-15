import React from 'react'
import ReactDOM from 'react-dom'
import Title from './Title.js'
import List from './List.js'

var div = React.DOM.div
var TitleFactory = React.createFactory(Title)
var ListFactory = React.createFactory(List)

class MainComponent extends Component {
  render() {
    return (
      div(null,
        TitleFactory({title: 'props brah', color: 'peru'}),
        TitleFactory({title: 'props yoppph', color: 'blue'}),
        TitleFactory({title: 'props homie', color: 'tomato'}),
        TitleFactory({title: 'props homie', color: 'rebeccapurple'}),
        ListFactory()
      )
    )
  }
}

ReactDOM.render(React.createElement(MainComponent), document.getElementById('app'))
