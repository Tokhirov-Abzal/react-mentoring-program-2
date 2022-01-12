import React from "react";

import { Select } from "../";

const AddModal = ({ genreList, modalTitle }) => {
  return (
    <React.Fragment>
      <h2>{modalTitle}</h2>
      <form>
        <div>
          <label htmlFor="modal-title">Title</label>
          <input id="modal-title" type="text" />
        </div>
        <div>
          <label htmlFor="modal-release__date">Release Date</label>
          <input id="modal-release__date" type="date" />
        </div>
        <div>
          <label htmlFor="modal-url">Movie URL</label>
          <input id="modal-url" type="text" placeholder="https://" />
        </div>
        <div>
          <label htmlFor="modal-rating">Rating</label>
          <input id="modal-rating" type="number" min="0" max="10" />
        </div>
        <div>
          <Select genreList={genreList} title="Genre" />
        </div>
        <div>
          <label htmlFor="">Runtime</label>
          <input id="modal-runtime" type="number" placeholder="minutes" />
        </div>
        <div className="modal__content--textarea">
          <label htmlFor="modal-overview">Overview</label>
          <textarea id="modal-overview" placeholder="Movie description" />
        </div>
        <div className="modal__btn">
          <button>Reset</button>
          <button>Submit</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default AddModal;
