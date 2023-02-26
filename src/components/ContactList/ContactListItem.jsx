export const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li key={id}>
          <p>{name} :</p>
      <p>{number}</p>
      <button type="button" onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};
