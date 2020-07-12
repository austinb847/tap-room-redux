import React, { Component } from 'react'
import NewKegForm from './NewKegForm';
import Modal from './Modal';
import TriggerButton from './TriggerButton';
import KegList from './KegList';
import KegDetail from './KegDetail';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';


class KegControl extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isShown: false
    }
    
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg)
    dispatch(action);
    // const action2 = a.toggleForm();
    // dispatch(action2);
    this.setState({isShown: false});
  }

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const keg = this.props.masterKegList[id];
    const action = a.selectKeg(keg);
    dispatch(action);
  }

  handleClick = () => {
    const { dispatch } = this.props;
    if(this.props.selectedKeg.keg != null) { 
      const action2 = a.resetKeg();
      dispatch(action2);
    // } else {
    //   const action3 = a.toggleForm();
    //   dispatch(action3);
    //   this.closeButton.focus();
    //   this.toggleScrollLock();
    }
  }

  showModal = () => {
    this.setState({isShown: true}, () => {
      this.closeButton.focus();
      this.toggleScrollLock();
    });
  }

  closeModal = () => {
    this.setState({isShown: false});
    this.TriggerButton.focus();
    this.toggleScrollLock();
  };

  onKeyDown = (event) => {
    if(event.keyCode === 27) {
      this.closeModal();
    }
  };

  onClickOutside = (event) => {
    if(this.modal && this.modal.contains(event.target)) return
    this.closeModal();
  }

  toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  }

  handleSellingKeg = (keg) => {
    const { dispatch } = this.props;
    if(this.props.masterKegList[keg.id].pints > 0) {
      const soldKeg = {...keg, pints: keg.pints - 1};
      const action = a.addKeg(soldKeg);
      dispatch(action);
    } else {
      const action2 = a.deleteKeg(keg.id);
      dispatch(action2);
    }
  }
  
  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action1 = a.deleteKeg(id);
    dispatch(action1);
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let triggerText = 'Add new Keg';
    let showButton = null;
    let returnHomeButton = null;

    if(this.props.selectedKeg.keg != null) {
      currentlyVisibleState = <KegDetail keg={this.props.selectedKeg}/>
      buttonText = "Return to Keg List";
      returnHomeButton = <button onClick={this.handleClick} className="btn btn-success">{buttonText}</button>
    }
    // else if(this.props.formVisibleOnPage) {
    //   currentlyVisibleState = <Modal onNewKegCreation={this.handleAddingNewKegToList}
    //                             modalRef={(n) => (this.modal = n)}
    //                             buttonRef={(n) => (this.closeButton = n)}
    //                             closeModal={this.handleClick}
    //                             onKeyDown={this.onKeyDown}
    //                             onClickOutside={this.onClickOutside}/>;
    //   buttonText = "Return to Keg List";
     else {
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} onSellingKeg={this.handleSellingKeg} onDeletingKeg ={this.handleDeletingKeg} />
      showButton = <TriggerButton 
      showModal={this.showModal}
      buttonRef={(n) => (this.TriggerButton = n)}
      triggerText={triggerText}
     />
    }
    return (
     <React.Fragment>
       {currentlyVisibleState}
       {showButton}
       {returnHomeButton}
       {this.state.isShown ? (
       <Modal
        onNewKegCreation={this.handleAddingNewKegToList}
        modalRef={(n) => (this.modal = n)}
        buttonRef={(n) => (this.closeButton = n)}
        closeModal={this.closeModal}
        onKeyDown={this.onKeyDown}
        onClickOutside={this.onClickOutside}
       />
       ) : null}
     </React.Fragment>
    )
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  selectedKeg: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg
  }
}

KegControl = connect(mapStateToProps)(KegControl);
export default KegControl
