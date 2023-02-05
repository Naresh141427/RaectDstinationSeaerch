import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {itemList} = this.props
    const {name, imgUrl} = itemList
    return (
      <li className="content-container">
        <img src={imgUrl} className="image" alt={name} />
        <p className="place">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
