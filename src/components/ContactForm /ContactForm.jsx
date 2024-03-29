import { useState } from 'react';
//  import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [contactName, setcontactName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    console.log('Add Contact button clicked!');
    e.preventDefault();
    if (contacts.some(({ name }) => name === contactName)) {
      window.alert(`${contactName} is already in your contacts`);
      return;
    }

    dispatch(
      addContact({
        name: contactName,
        number,
        // id: nanoid(),
      })
    );

    setcontactName('');
    setNumber('');
  };

  const handleChange = e => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setcontactName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.formLabel}>
          Name
          <input
            className={styles.formInput}
            type="text"
            name="name"
            value={contactName}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={styles.formLabel}>
          Number
          <input
            className={styles.formInput}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={styles.addContactBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
