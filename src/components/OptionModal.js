import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <div>
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Seleted Option"
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Here is the option</h3>
      {props.selectedOption && (
        <p className="modal__body">{props.selectedOption}</p>
      )}
      <button className="button" onClick={props.handleDeleteSelectedOption}>
        Roger That
      </button>
    </Modal>
  </div>
);
export default OptionModal;
