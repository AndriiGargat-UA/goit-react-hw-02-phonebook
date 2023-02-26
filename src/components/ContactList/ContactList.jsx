import { ContactListItem } from './ContactListItem';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return <ContactListItem key={contact.id} id={contact.id} name={contact.name} number={contact.number} onDelete={onDelete} />;
      })}
    </ul>
  );
};