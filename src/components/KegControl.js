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

  handleClick = () => {
    if(this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      })
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }))
    }
  }

  handleSellingKeg = (id) => {
    const kegIndex = this.state.masterKegList.findIndex(element => element.id === id )
    let newKegList = [...this.state.masterKegList]
    if(newKegList[kegIndex].pints > 0) {
      newKegList[kegIndex] = {...newKegList[kegIndex], pints: newKegList[kegIndex].pints - 1}
      this.setState({
        masterKegList: newKegList,
      });
    }
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
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} onSellingKeg={this.handleSellingKeg} />
      buttonText = "Add New Keg";
    }
    return (
     <React.Fragment>
       {currentlyVisibleState}
       <button onClick={this.handleClick} className="btn btn-success">{buttonText}</button>
     </React.Fragment>
    )
  }
}

export default KegControl
