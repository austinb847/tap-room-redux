import React from 'react'
import { v4 } from 'uuid';

function NewKegForm() {
  
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.price.value);
    console.log(event.target.alcoholContent.value);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Keg Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand Name'/>
        <input
          type='text'
          name='price'
          placeholder='Price'/>
        <input
          type='text'
          name='alcoholContent'
          placeholder='Alcohol Content'/>
        <button type='submit' className='btn btn-primary'>Add</button>
      </form>
    </React.Fragment>
  )
}

export default NewKegForm
