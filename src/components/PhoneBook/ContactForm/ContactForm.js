import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Forms = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 300px;
`;
const Button = styled.button`
  border: none;
  background: pink;
  color: #fff;
  cursor: pointer;
  margin-right: 40px;
    margin-top: 15px;
   &:hover,
    &:focus {
    color: black;
    box-shadow: 1px 1px 2px , 0 0 25px purple, 0 0 5px gray;
`;

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmitForm(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { number, name } = this.state;
    return (
      <>
        <Forms onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              onChange={event => this.handleChange(event)}
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={event => this.handleChange(event)}
              value={number}
              required
            />
          </label>
          <Button type="submit"> Add contact</Button>
        </Forms>
        <div>
          <ul></ul>
        </div>
      </>
    );
  }
}
ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
export default ContactForm;
