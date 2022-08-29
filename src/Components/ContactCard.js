import React from "react";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="contactList-container">
      <div className="contact-container">
        <div className="avatar">
          <i className="material-icons">person</i>
        </div>

        <div className="contact-name">
          <p className="name">{name}</p>
          <p className="email">{email}</p>
        </div>

        <div className="trash" onClick={() => props.clickHandler(id)}>
          <i className="material-icons">delete</i>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
