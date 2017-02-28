import React from 'react'
const { object } = React.Proptypes

const AsyncRoute = React.createClass ({
  propTypes: {
    props: object,
    loadingPromise: object
  },
  getInitialState () {
    return {
      loaded: false
    }
  }
})
