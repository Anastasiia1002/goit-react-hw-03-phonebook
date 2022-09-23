import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Button = styled.button`
  border: none;
  background: red;
  color: #fff;
  cursor: pointer;
      align-items: flex-end;
   &:hover,
    &:focus {
    color: black;
    box-shadow: 1px 1px 2px black, 0 0 25px black, 0 0 5px gray;
`;
const Ul = styled.ul`
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 0;
`;

const Li = styled.ul`
  width: 300px;
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
`;
const ContactList = ({ filterContacts, delContact }) => {
  return (
    <>
      <Ul>
        {filterContacts().map(({ id, name, number }) => {
          return (
            <Li key={id}>
              <span>{name}: </span>
              <span>{number}</span>

              <Button onClick={() => delContact(id)} type="button">
                Delete
              </Button>
            </Li>
          );
        })}
      </Ul>
    </>
  );
};
ContactList.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  delContact: PropTypes.func.isRequired,
};

export default ContactList;
