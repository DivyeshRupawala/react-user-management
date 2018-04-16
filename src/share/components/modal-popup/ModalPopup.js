import React from 'react';
import { Modal, Button} from 'react-bootstrap';

import { connect } from 'react-redux'
import { closeModal } from './modal-popup-actions'

const ModalPopup = (props) => {

    const {title, body, okButtonName, closeButtonName, handleClose, isShow} = props;

    const closeModal = () => {
        props.onCloseModal()
    }

    return (
        <div className="modal-containe">
          <Modal show={isShow} onHide={handleClose} aria-labelledby="contained-modal-title">
            <Modal.Header>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>{body}</Modal.Body>

            <Modal.Footer>
              <Button onClick={closeModal}>{closeButtonName}</Button>
              <Button onClick={closeModal} bsStyle="primary">{okButtonName}</Button>
            </Modal.Footer>
          </Modal>
        </div>
    )
}

const mapStateToProps = (state, props) => 
  ({
    title : state.modalPopup.title,
        body :  state.modalPopup.body,
        okButtonName : state.modalPopup.okButtonName, 
        closeButtonName : state.modalPopup.closeButtonName,
        isShow : state.modalPopup.isShow
  })

const mapDispatchToProps = dispatch => 
  ({
    onCloseModal() {
      dispatch(
        closeModal()
      )
    }   
  })  

const Container = connect(mapStateToProps, mapDispatchToProps)(ModalPopup)  

export default Container;


