import React from 'react'
import PropTypes from 'prop-types'
import Keg from './Keg'

function KegList(props) {
  return (
   <React.Fragment>
     <hr />
     <div className='row'>
      {Object.values(props.kegList).map((keg) => {
        return <Keg
          whenKegClicked = {props.onKegSelection}
          whenKegSold = {props.onSellingKeg}
          whenKegDeleted = {props.onDeletingKeg}
          name ={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent = {keg.alcoholContent}
          key={keg.id}
          id={keg.id}
          pints={keg.pints} />
      })}
     </div>
   </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onSellingKeg: PropTypes.func,
  onDeletingKeg: PropTypes.func
}

export default KegList

