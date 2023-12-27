import React, { Component } from 'react';
import shortid from 'shortid';
import s from './ContactForm.module.css'

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  contactNameId = shortid.generate();
  contactNumberId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.onSubmit(name, number);
    this.reset();
  };

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    return (
      <form className={s.TaskEditor} onSubmit={this.handleSubmit}>
        <label className={s.TaskEditor_label } htmlFor={this.contactNameId}>
          Name
          <input
            className={s.TaskEditor_input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.contactNameId}
          />
        </label>
        <label className={s.TaskEditor_label} htmlFor={this.contactNumberId}>
          Number
          <input
            className={s.TaskEditor_input}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.contactNumberId}
          />
        </label>

        <button className={s.TaskEditor_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;