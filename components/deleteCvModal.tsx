// This is a modal that is used to display the privacy policy and terms of service

import React, { FC } from "react";
import styles from "../styles/Modal.module.css";
import { Button } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteCvModal: FC<ModalProps> = ({ show, onClose, onDelete }) => {
  if (!show) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}><DeleteForeverIcon /> Deleting CV</h2>
        <p>
          Are you sure you want to delete your CV? This action cannot be undone
          and all associated personal information will be permanently removed
          from our system.
        </p>
        <p>
          If you are sure you want to delete your CV, please click the &quot;Delete&quot;
          button below. If you have changed your mind, you can click &quot;Cancel&quot; to
          return to your CV and personal information.
        </p>
        <p>
          We appreciate you taking the time to use our website and hope that it
          has been a helpful resource for you. Our team is dedicated to
          providing the best possible experience for our users, and we are
          always looking for ways to improve.
        </p>
        <p>Thank You for Using Our Site</p>
        <div className={styles.modalButtons}>
          <Button variant="contained" color="primary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" color="secondary" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCvModal;
