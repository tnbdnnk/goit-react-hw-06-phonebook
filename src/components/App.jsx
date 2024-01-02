import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import css from './App.module.css';

export const App = () => {
    const users = useSelector(state => state.contacts.items);

    return (
        <div className={css.container}>
            <h2 className={css.title}>Phonebook</h2>
            <ContactForm />
            <h2 className={css.title}>Contacts</h2>
            {!users.length ? (
                <h3>Your phonebook is empty. Add your first contact.</h3>
            ) : (
                <>
                    <h3>Your phonebook has {users.length} contacts.</h3>
                    <div className={css.filter}>
                    <Filter />
                    <ContactList />
                    </div>
                </>
            )}
        </div>
    );
};
