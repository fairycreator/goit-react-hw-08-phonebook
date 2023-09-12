import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectStatusFilter } from 'redux/selectors';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <label className={styles.contactLabel}>
      Find contacts by name
      <input
        className={styles.contactInput}
        type="text"
        name={filter}
        value={filter}
        onChange={onChange}
        placeholder="Please write name"
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  OnChange: PropTypes.func,
};
