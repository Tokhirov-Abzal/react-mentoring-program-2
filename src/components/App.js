import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Main, Footer, NotificationModal, Modal } from ".";
import { resetSuccess } from "../redux/action";
import "../style/main.scss";

// thunk
import { fetchData } from "../thunk/thunk";

// action creators

const App = () => {
  // redux
  const dispatch = useDispatch();
  const { clickedMovie, onSuccess, onSuccessEdit, onSuccessDelete } =
    useSelector((state) => state);
  useEffect(() => {
    // fetch data with thunk
    dispatch(fetchData());
  }, []);

  const [successModal, setSuccessModal] = useState(false);

  return (
    <div className={clickedMovie ? "container active" : "container"}>
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

      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
