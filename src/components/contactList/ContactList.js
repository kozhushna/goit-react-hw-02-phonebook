import ContactListItem from 'components/contactListItem';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
            id={id}
          />
        );
      })}
    </ul>
  );
};
