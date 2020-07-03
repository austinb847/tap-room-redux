import React, { Component } from 'react'
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';

class KegControl extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       formVisibleOnPage: false,
       masterKegList: [],
       pints: 124,
       selectedKeg: null
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList,
                    formVisibleOnPage: false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }
  

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg}/>
      buttonText = "Return to Keg List";
    }
    else if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>
      buttonText = "Add New Keg";
    }
    return (
     <React.Fragment>
       {currentlyVisibleState}
     </React.Fragment>
    )
  }
}

export default KegControl
