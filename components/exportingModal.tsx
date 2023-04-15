// This is a modal that is used to display the privacy policy and terms of service

import React, { FC } from "react";
import styles from "../styles/Modal.module.css";
import DownloadingIcon from '@mui/icons-material/Downloading';

interface ModalProps {
  show: boolean;
}

const ExportingModal: FC<ModalProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2><DownloadingIcon /> Exporting CV to PDF</h2>
        
      </div>
    </div>
  );
};

export default ExportingModal;
