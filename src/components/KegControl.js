import React, { Component } from 'react'
import NewKegForm from './NewKegForm';

class KegControl extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  

  render() {
    return (
     <React.Fragment>
       <NewKegForm />
     </React.Fragment>
    )
  }
}

export default KegControl
