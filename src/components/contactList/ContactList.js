import ContactListItem from 'components/contactListItem';

export const ContactList = ({ contacts }) => {
  //console.log(contacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} name={name} number={number} />;
      })}
    </ul>
  );
};
