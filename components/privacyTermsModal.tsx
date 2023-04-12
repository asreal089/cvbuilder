// This is a modal that is used to display the privacy policy and terms of service

import React, { FC } from "react";
import styles from "../styles/Modal.module.css";
import { Button } from "@material-ui/core";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const PrivacyModal: FC<ModalProps> = ({ show, onClose, onSubmit }) => {
  if (!show) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Privacy Policy</h2>
        <p>
          We take your privacy seriously and are committed to protecting your
          personal information. We only collect and use information that you
          voluntarily provide to us, such as your name and email address, to
          provide and improve our services and to communicate with you about our
          products and promotions.
        </p>
        <p>
          We do not sell or share your personal information with third parties
          unless required by law or with your express consent. We may use
          anonymous and aggregated data for research and analytical purposes to
          improve our website and services.
        </p>
        <p>
          When you use our website, we may collect information such as your IP
          address, browser type, and device type for technical and analytical
          purposes. We may also use cookies or similar technologies to
          personalize your experience and track your usage of our website.
        </p>
        <p>
          We only display your personal information on our website with your
          explicit consent, such as provided in this form. We take reasonable
          precautions to protect your personal information.
        </p>
        <p>
          If you submit a CV or other personal information to us, we will only
          use it for the specific purpose that you provided it, such as
          considering you for a job opening. We will keep your CV and personal
          information for as long as necessary to fulfill this purpose, unless
          you delete it earlier.
        </p>
        <p>
          By using our website, you consent to the collection, use, and display
          of your personal and anonymous information in accordance with this
          Privacy Policy.
        </p>
        <div className={styles.modalButtons}>

        <Button variant="contained" color="primary" onClick={onSubmit}>
          Accept
        </Button>
        <Button variant="contained" color="secondary" onClick={onClose}>
          Cancel
        </Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
