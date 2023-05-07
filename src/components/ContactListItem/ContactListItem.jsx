import PropTypes from 'prop-types';
import {} from 'components/ContactListItem/ContactListItem.styled';

export const ContactListItem = ({ name, number }) => {
  return (
    <>
      {name}: {number}
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
