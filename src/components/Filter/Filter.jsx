import PropTypes from 'prop-types'; 

export const Filter = ({ value, filterName }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={filterName} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  filterName: PropTypes.func.isRequired,
}