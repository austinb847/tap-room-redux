import React from 'react'
import PropTypes from 'prop-types'

function KegDetail(props) {
  const { keg } = props;
  return (
    <React.Fragment>
      <h1>{keg.keg.name}</h1>
      <ul>
        <li>Brand: {keg.keg.brand}</li>
        <li>Price: {keg.keg.price}</li>
        <li>Alcohol Content: {keg.keg.alcoholContent}</li>
      </ul>
      <hr/>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object
}

export default KegDetail

