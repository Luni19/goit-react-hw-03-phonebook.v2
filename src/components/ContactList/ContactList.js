import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.TaskList}>
    {contacts.map(({ id, name, number }) => (
      <li className={s.TaskList_item} key={id}>
        <span className={s.TaskList_text}>{name}:</span>
        <span className={s.TaskList_text}>{number}</span>
        <button
          className={s.TaskList_button}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;