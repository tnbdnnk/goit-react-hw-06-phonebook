import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'reduxx/contactSlice';

import css from './ContactForm.module.css';

export const ContactForm = () => {
    const dispatch = useDispatch();

    const handleFormSubmit = e => {
        e.preventDefault();

        const newContact = {
        id: nanoid(),
        name: e.target.elements.name.value,
        number: e.target.elements.number.value,
        };
        dispatch(addContact(newContact));

        e.target.reset();
    };

    return (
        <form onSubmit={handleFormSubmit} className={css.form}>
        <label className={css.label} htmlFor="nameInput">
            Name
            <input
            id="nameInput"
            className={css.input}
            placeholder="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+([ -'][a-zA-Zа-яА-Я]+)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            />
        </label>
        <label className={css.label} htmlFor="numberInput">
            Number
            <input
            id="numberInput"
            className={css.input}
            placeholder="Phone number"
            type="tel"
            name="number"
            pattern="^[0-9]*$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            />
        </label>
        <button className={css.btn} type="submit">
            Add contact
        </button>
        </form>
    );
};
