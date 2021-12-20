import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';

import s from './Filter.module.css';

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.filter__label}>
      <p className={s.filter__text}>Find contacts by name</p>
      <input
        className={s.filter__input}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.currentTarget.value))}
      />
    </label>
  );
}

export default Filter;
