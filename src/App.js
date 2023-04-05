import {Component} from 'react'

import LettersCalculator from './components/LettersCalculator'

import './App.css'

class App extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="card-container">
        <div className="container">
          <div>
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="searchInputText" className="input-name">
              Enter the phrase
            </label>
            <br />
            <input
              type="text"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              className="search-input"
              id="searchInputText"
              placeholder="Enter the phrase"
            />
            <p className="char-length">No.of letters: {searchInput.length}</p>
          </div>
          <LettersCalculator />
        </div>
      </div>
    )
  }
}

// {/* <LettersCalculator /> */}

export default App
