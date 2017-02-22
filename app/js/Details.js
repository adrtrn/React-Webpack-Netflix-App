import React from 'react'

const Details = React.createClass({
  render () {
    return (
      <div>
        {/* easy debugging tool for testing output */ }
        <pre><code>
          {JSON.stringify(this.props, null, 4)}
        </code></pre>
      </div>
    )
  }
})

// stateless functional component (render method)
// const Details = () => {
//   return <h1>meow</h1>
// }

export default Details
