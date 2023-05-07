import PropTypes from 'prop-types';
import { List, Item } from 'components/ContactList/ContactList.styled';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <ContactListItem name={name} number={number} />

          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
