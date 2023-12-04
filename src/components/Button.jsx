/* eslint-disable react/prop-types */
export default function Button({ children, onClick, btnStyle }) {
  return (
    <button className={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
}
