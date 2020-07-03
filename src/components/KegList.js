import React from 'react'
import PropTypes from 'prop-types'
import Keg from './Keg'

function KegList(props) {
  return (
   <React.Fragment>
     <hr />
     {props.kegList.map((keg) => 
      <Keg
        whenKegClicked = {props.onKegSelection} //add props.onKegSelection
        name ={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent = {keg.alcoholContent}
        key={keg.id}
        id={keg.id} />
     )}
   </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}

export default KegList

