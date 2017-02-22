import React from 'react'

const Details = React.createClass({
  render () {
    return (
      // easy debugging tool 
      <pre><code>
        {JSON.stringify(this.props, null, 4)}
      </code></pre>
    )
  }
})

// stateless component
const Details = () => {
  return <h1>meow</h1>
}

export default Details
