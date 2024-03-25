function PillButton({ icon, content, border }) {
  return (
    <button type="button" className={`rounded-pill btn-rounded ${border} `}>
      {content}
      <span>{icon}</span>
    </button>
  );
}

export default PillButton;
