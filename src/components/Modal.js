const Modal = (props) => {
  const { onCancel, onConfirm } = props;

  const cancel = () => {
    onCancel();
  };

  const confirm = () => {
    onConfirm();
  };

  return (
    <div className="modal">
      <p>정말 삭제하시겠습니까?</p>
      <button className="btn btn--alt" onClick={cancel}>
        Cancel
      </button>
      <button className="btn" onClick={confirm}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
