import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'reduxx/filterSlice';

import css from './Filter.module.css';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filtr);

    const handleFilterChange = e => {
        dispatch(filterContacts(e.target.value));
    };

    return (
        <label className={css.label} htmlFor="filterInput">
        Find contacts by name
        <input
            id="filterInput"
            className={css.input}
            value={filter}
            type="text"
            onChange={handleFilterChange}
        />
        </label>
    );
};
