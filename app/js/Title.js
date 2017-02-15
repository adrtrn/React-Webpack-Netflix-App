import React from 'react'

var div = React.DOM.div
var h1 = React.DOM.h1

class Title extends Component {
  render() {
    return (
      div(null,
        h1({style:{color:this.props.color}}, this.props.title)
      )
    )
  }
}

export default Title


