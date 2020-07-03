import React, { Component } from 'react'
import NewKegForm from './NewKegForm';
import KegList from './KegList';

class KegControl extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       formVisibleOnPage: false,
       masterKegList: [],
       pints: 124
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList,
                    formVisibleOnPage: false});
  }
  

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList}/>
      buttonText = "Add New Keg";
    }
    return (
     <React.Fragment>
       
     </React.Fragment>
    )
  }
}

export default KegControl
