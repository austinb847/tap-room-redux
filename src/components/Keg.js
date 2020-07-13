import React from 'react'
import PropTypes from 'prop-types'
import { DeleteFilled } from '@ant-design/icons';
import {ReactComponent as BeerIcon} from './beer.svg';

function Keg(props) {
  
  return (
    <React.Fragment>
      <div className="column">
        <div className="keg-item">
          <h3 onClick = {() => props.whenKegClicked(props.id)} className='keg'>{props.name} - {props.brand}</h3>
          <p>Total Pints: {props.pints}</p>
          {/* <button onClick= {() => props.whenKegSold({name: props.name, brand: props.brand, price: props.price, alcoholContent: props.alcoholContent, 
                                                      id: props.id, pints: props.pints})}>Sell Pint</button> */}
          <br/>
          {/* <button onClick={() => props.whenKegDeleted(props.id)}>Delete Keg</button> */}
          <BeerIcon className="add-keg-button" onClick= {() => props.whenKegSold({name: props.name, brand: props.brand, price: props.price, alcoholContent: props.alcoholContent, 
                                                      id: props.id, pints: props.pints})}/>
          <DeleteFilled className="delete-button" onClick={() => props.whenKegDeleted(props.id)}/>
        </div>
      </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenKegSold: PropTypes.func,
  whenKegDeleted: PropTypes.func,
  pints: PropTypes.number
}

export default Keg

