// This is a modal that is used to display the privacy policy and terms of service

import React, { FC } from "react";
import styles from "../styles/Modal.module.css";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  contact :{
    email: string;
    whatsapp: string;
  }
}

const ContactModal: FC<ModalProps> = ({ show, onClose , contact}) => {
  if (!show) return null;

  const contactTextMessage = "Hi there, I saw your CV on CV Builder and I would like to contact you.";

  const handleEmailClick = () => {
    const subject = "Contacting you about your CV - CV Builder";
    const body = `${contactTextMessage}`;
    const mailtoLink = `mailto:${contact.email}?&subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, "_blank");
  };

  const handleWhatsAppClick = () => {
    const whatsappText = `${contactTextMessage}`;
    const whatsappLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
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
        <h2>Send this person a message</h2>
        <div className={styles.shareButtonsDiv}>
          <button className={styles.shareButtons} onClick={handleEmailClick}><EmailIcon/>Contact via Email</button>
          <button className={styles.shareButtons} onClick={handleWhatsAppClick}><WhatsAppIcon/>Contact via WhatsApp</button>
        </div>
        
      </div>
    </div>
  );
};

export default ContactModal;
