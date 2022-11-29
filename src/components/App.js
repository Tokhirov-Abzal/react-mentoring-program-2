import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NotificationModal, Modal } from ".";

const App = ({ children }) => {
  const { clickedMovie, onSuccess, onSuccessEdit, onSuccessDelete } =
    useSelector((state) => state);

  const [successModal, setSuccessModal] = useState(false);

  const [clickedMovieState, setClickedMoviestate] = useState(null);

  useEffect(() => {
    setClickedMoviestate("container");

    if (clickedMovie) {
      setClickedMoviestate("container_active");
    }
  }, [clickedMovie]);

  return (
    <div className={clickedMovieState}>
      <Modal modalState={onSuccess} setModalState={setSuccessModal}>
        <NotificationModal
          title="Congratulations!"
          success={true}
          info="The movie has been added to 
        database successfully"
        />
      </Modal>
      <Modal modalState={onSuccessEdit} setModalState={setSuccessModal}>
        <NotificationModal
          title="Congratulations!"
          success={true}
          info="The movie has been edited successfully"
        />
      </Modal>
      <Modal modalState={onSuccessDelete} setModalState={setSuccessModal}>
        <NotificationModal
          title="Congratulations!"
          success={true}
          info="The movie has been deleted successfully"
        />
      </Modal>

      {children}
    </div>
  );
};

export default App;
