function PillButton({ icon, content }) {
  return (
    <button type="button" className="rounded-pill btn-rounded ">
      {content}
      <span>{icon}</span>
    </button>
  );
}

export default PillButton;
