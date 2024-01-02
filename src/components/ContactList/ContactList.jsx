import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { deleteContact } from 'reduxx/contactSlice';

import css from './ContactList.module.css';

const selectContacts = state => state.contacts.items;
const selectFilter = state => state.filter;

const getFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        return contacts.filter(item =>
        item.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
        );
    }
);

export const ContactList = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(getFilteredContacts);

    return (
        <ul className={css.contacts__list}>
        {contacts.map(item => (
            <li className={css.contacts__item} key={item.id}>
            <p>{item.name}</p>{' '}
            <span className={css.contacts__span}>{item.number}</span>
            <button
                className={css.contacts__btn}
                type="button"
                onClick={() => dispatch(deleteContact(item.id))}
            >
                Delete
            </button>
            </li>
        ))}
        </ul>
    );
};
