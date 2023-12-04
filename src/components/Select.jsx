/* eslint-disable react/prop-types */
export default function Select({ name, onChange, className, value, filter }) {
  return (
    <select name={name} onChange={onChange} className={className} value={value}>
      <option>select {name}</option>
      {filter.map((el, i) => (
        <option key={i}>{el}</option>
      ))}
    </select>
  );
}
