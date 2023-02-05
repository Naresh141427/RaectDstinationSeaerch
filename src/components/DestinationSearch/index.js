import {Component} from 'react'
import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  render() {
    const {destinationsList} = this.props
    return (
      <div className="bg-container">
        <div className="top-section">
          <h1 className="search-header">Destination Search</h1>
          <div className="input-container">
            <input className="search-bar" type="search" placeholder="Search" />
            <input
              type="image"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search-icon"
              height="20"
              width="20"
            />
          </div>
        </div>
        <div className="bottom-section">
          <ul className="item-section">
            {destinationsList.map(each => (
              <DestinationItem itemList={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
