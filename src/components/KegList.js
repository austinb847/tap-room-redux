import React from 'react'
import PropTypes from 'prop-types'
import Keg from './Keg'

function KegList(props) {
  return (
   <React.Fragment>
     <hr />
     {Object.values(props.kegList).map((keg) => {
      return <Keg
        whenKegClicked = {props.onKegSelection}
        whenKegSold = {props.onSellingKeg}
        name ={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent = {keg.alcoholContent}
        key={keg.id}
        id={keg.id}
        pints={keg.pints} />
     })}
   </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onSellingKeg: PropTypes.func
}

export default KegList

