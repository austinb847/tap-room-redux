import React from 'react'
import PropTypes from 'prop-types'
import Keg from './Keg'

function KegList(props) {
  return (
   <React.Fragment>
     <hr />
     {props.kegList.map((keg) => 
      <Keg
        whenKegClicked = {props.onKegSelection}
        whenKegSold = {props.onSellingKeg}
        name ={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent = {keg.alcoholContent}
        key={keg.id}
        id={keg.id}
        pints={keg.pints} />
     )}
   </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onSellingKeg: PropTypes.func
}

export default KegList

