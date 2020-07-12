import React from 'react'
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function Form(props) {
  
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onSubmit({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, 
                             alcoholContent: event.target.alcoholContent.value, pints: 124, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          className="form-control"
          id="brand"
          name="brand"
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="text"
          className="form-control"
          id="price"
          name="price"
        />
      </div>
      <div className="form-group">
        <label htmlFor="alcoholContent">Alcohol Content</label>
        <input
          type="text"
          className="form-control"
          id="alcoholContent"
          name="alcoholContent"
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Add Keg
        </button>
      </div>
    </form>
    </React.Fragment>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func
};

export default Form
