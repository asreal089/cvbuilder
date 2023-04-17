// This is a modal that is used to display the privacy policy and terms of service

import React, { FC } from "react";
import styles from "../styles/Modal.module.css";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";



interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const ShareModal: FC<ModalProps> = ({ show, onClose }) => {
  if (!show) return null;
  const url = window.location.href;
  const shareTextEmail = "Check out this CV link:";
  const shareTextWhatsApp = "Check out this CV:";

  const handleEmailClick = () => {
    const subject = "Amazing CV Link";
    const body = `${shareTextEmail} ${url}`;
    const mailtoLink = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, "_blank");
  };

  const handleWhatsAppClick = () => {
    const whatsappText = `${shareTextWhatsApp} ${url}`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
      whatsappText
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.buttonCloseModal} onClick={onClose}>
          <CloseIcon />
        </button>
        <h2 className={styles.modalTitle}> 
          <ShareIcon /> Share this CV
        </h2>

        <div className={styles.shareButtonsDiv}>
          <button className={styles.shareButtons} onClick={handleEmailClick}><EmailIcon/>Share via Email</button>
          <button className={styles.shareButtons} onClick={handleWhatsAppClick}><WhatsAppIcon/>Share via WhatsApp</button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
