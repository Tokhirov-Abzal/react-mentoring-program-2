import React from "react";

import { Select, InputForm, InputTextarea } from "../";
import { Formik, Form, Field } from "formik";
import { postMovie, editMovie } from "../../thunk/thunk";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  editClickedMovieById,
  onSuccessEdit,
  resetClickedMovie,
} from "../../redux/action";

const MovieSchema = Yup.object().shape({
  modalTitle: Yup.string().required("Required"),
  modalReleaseDate: Yup.string().required("Required"),
  modalUrl: Yup.string().url("URL is not relevant").required("Required!"),
  modalRating: Yup.number()
    .min(0, "Minimum 0")
    .max(10, "Max 10")
    .required("Required!"),
  modalRuntime: Yup.number().min(1, "minimum 1min"),
  modalOverview: Yup.string().required("Required"),
});

const AddModal = ({ modalTitle, setModalState, movieId, setSrc }) => {
  const dispatch = useDispatch();
  const { editClickedMovie } = useSelector((state) => state);
  return (
    <React.Fragment>
      <h2>{modalTitle}</h2>
      <Formik
        initialValues={{
          modalTitle: editClickedMovie ? editClickedMovie.title : "",
          modalReleaseDate: editClickedMovie
            ? editClickedMovie.release_date
            : "",
          modalUrl: editClickedMovie ? editClickedMovie.poster_path : "",
          modalRating: editClickedMovie ? editClickedMovie.vote_average : "",
          genre: editClickedMovie ? editClickedMovie.genres : [],
          modalRuntime: editClickedMovie ? editClickedMovie.runtime : "",
          modalOverview: editClickedMovie ? editClickedMovie.overview : "",
        }}
        enableReinitialize={true}
        validationSchema={MovieSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          if (editClickedMovie !== null) {
            dispatch(editMovie(data, editClickedMovie));
            setSrc((prev) =>
              prev.map((item) =>
                item.id === movieId
                  ? {
                      id: item.id,
                      title: data.modalTitle,
                      release_date: data.modalReleaseDate,
                      poster_path: data.modalUrl,
                      vote_average: data.modalRating,
                      genres: data.genre,
                      runtime: data.modalRuntime,
                      overview: data.modalOverview,
                    }
                  : item
              )
            );
            // dispatch(resetClickedMovie());
            resetForm();
            setModalState(false);
          } else {
            dispatch(postMovie(data));

            // resetForm();
          }
        }}
      >
        {({ values, isSubmitting, errors, touched, resetForm }) => (
          <Form>
            <div className="input__wrapper">
              <Field
                title="Title"
                name="modalTitle"
                placeholder="Title"
                component={InputForm}
                type="text"
              />
              {errors.modalTitle && touched.modalTitle && (
                <pre style={{ color: "orange" }}>{errors.modalTitle}</pre>
              )}
            </div>
            <div className="input__wrapper">
              <Field
                title="Release Date"
                id="modal-release__date"
                type="date"
                name="modalReleaseDate"
                component={InputForm}
              />
              {errors.modalReleaseDate && touched.modalReleaseDate && (
                <pre style={{ color: "orange" }}>{errors.modalReleaseDate}</pre>
              )}
            </div>
            <div className="input__wrapper">
              <Field
                title="Movie URL"
                id="modal-url"
                type="text"
                placeholder="https://"
                name="modalUrl"
                component={InputForm}
              />
              {errors.modalUrl && touched.modalUrl && (
                <pre style={{ color: "orange" }}>{errors.modalUrl}</pre>
              )}
            </div>
            <div className="input__wrapper">
              <Field
                title="Rating"
                type="number"
                name="modalRating"
                component={InputForm}
              />
              {errors.modalRating && touched.modalRating && (
                <pre style={{ color: "orange" }}>{errors.modalRating}</pre>
              )}
            </div>
            <div className="input__wrapper">
              <Select title="Genre" />
              {touched.genre && values.genre.length === 0 ? (
                <pre style={{ color: "orange" }}>
                  should be selected at least one genre!
                </pre>
              ) : null}
            </div>
            <div className="input__wrapper">
              <Field
                title="Runtime"
                id="modal-runtime"
                type="number"
                placeholder="minutes"
                name="modalRuntime"
                component={InputForm}
              />
              {errors.modalRuntime && touched.modalRuntime && (
                <pre style={{ color: "orange" }}>{errors.modalRuntime}</pre>
              )}
            </div>
            <div className="modal__content--textarea input__wrapper">
              <Field
                title="Overview"
                placeholder="Movie description"
                placeholder="Movie description"
                name="modalOverview"
                component={InputTextarea}
              />
              {errors.modalOverview && touched.modalOverview && (
                <pre style={{ color: "orange" }}>{errors.modalOverview}</pre>
              )}
            </div>

            <div className="modal__btn">
              <button
                onClick={() => {
                  resetForm();
                  dispatch(editClickedMovieById(null));
                }}
              >
                Reset
              </button>
              {editClickedMovie ? (
                <button type="submit" disabled={isSubmitting}>
                  Edit
                </button>
              ) : (
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              )}
            </div>
            {/* <pre style={{ color: "white" }}>
              {JSON.stringify(values, null, 2)}
            </pre> */}
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default AddModal;
