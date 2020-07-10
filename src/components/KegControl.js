import React, { Component } from 'react'
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class KegControl extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       selectedKeg: null //remove later
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg)
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg}); //remove this later
  }

  handleClick = () => {
    if(this.state.selectedKeg != null) { // change this to use redux store
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      })
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
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
    else if(this.props.formVisibleOnPage) {
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
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);
export default KegControl
