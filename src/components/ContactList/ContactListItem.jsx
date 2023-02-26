import PropTypes from 'prop-types';

export const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li key={id}>
      <p>{name} :</p>
      <p>{number}</p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
