import React from 'react'
import PropTypes from 'prop-types'
import Keg from './Keg'

function KegList(props) {
  return (
   <React.Fragment>
     <hr />
     {props.kegList.map((keg, index) => 
      <Keg 
        name ={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent = {keg.alcoholContent}
        key={index} />
     )}
   </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array
}

export default KegList

