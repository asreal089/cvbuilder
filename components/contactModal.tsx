// This is a modal that is used to display the privacy policy and terms of service

import React, { FC } from "react";
import styles from "../styles/Modal.module.css";
import CloseIcon from "@mui/icons-material/Close";

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const ContactModal: FC<ModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.buttonCloseModal} onClick={onClose}>
          <CloseIcon />
        </button>
        <h2>Send this person a message</h2>
        
      </div>
    </div>
  );
};

export default ContactModal;
