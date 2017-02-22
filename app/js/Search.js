import React from 'react'
import ShowCard from './ShowCard'
const { arrayOf, shape, string } = React.Proptypes

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    }))
  },
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='search'>
        <header>
          <h1>svideo</h1>
          <input onChange={this.handleSearchTermChange} type='text' value={this.state.searchTerm} placeholder='Movie Title' />
        </header>
        <div>
          {this.props.shows
            .filter((show) => `${show.title} ${show.description}`
            .toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map((show) => {
              return (
                <ShowCard key={show.imdbID} {...show} />
            )
            })}
        </div>
      </div>
    )
  }
})

export default Search
