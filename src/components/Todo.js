import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
  const { title } = props;

const [modalOpen, setModalOpen] = useState(false);

  const onClickDelete = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  }
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        <div className="actions">
          <button className="btn" onClick={onClickDelete}>
            Delete
          </button>
        </div>
      </div>
      {modalOpen && <Modal onCancel={closeModal} onConfirm={closeModal}/>}
      {modalOpen && <Backdrop cancle={closeModal} />}
    </>
  );
};
export default Todo;
