export const Filter = ({ value, filterName }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={filterName} />
    </label>
  );
};
