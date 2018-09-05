import React, { Component } from 'react'
import './App.css';


export default class ProductItem extends Component {
  render() {
    const { name, i, price, onDelete } = this.props;
    return (
      <div>
         <div key={i}>
              <span>{name}</span>
              {` | `}
              <span>{price}</span>
              {` | `}
              <button 
              onClick={this.onDelete}
              className='btn'>Delete</button>
            </div>
      </div>
    )
  }
  onDelete = () => {
    const { onDelete, name } = this.props;
    console.log('bla bla', onDelete(name))
  }
}
