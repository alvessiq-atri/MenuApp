import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function AlertModal({ toggle, modal }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Ingredients needed!</ModalHeader>
        <ModalBody>Plate cannot be without ingredients! Add some :)</ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={toggle}>
            Got it!
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AlertModal;
