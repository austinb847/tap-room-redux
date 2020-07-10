import React, { Component } from 'react'
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class KegControl extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       formVisibleOnPage: false, //remove these later
       selectedKeg: null
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { name, brand, price, alcoholContent, id, pints } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false}); //remove this later
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg}); //remove this later
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
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} onSellingKeg={this.handleSellingKeg} />
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

KegControl.propTypes = {
  masterKegList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList
  }
}

KegControl = connect(mapStateToProps)(KegControl);
export default KegControl
