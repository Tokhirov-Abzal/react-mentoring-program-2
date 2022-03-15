import React from "react";

import { Select, InputForm, InputTextarea } from "../";
import { Formik, Form, Field } from "formik";
import { postMovie, editMovie } from "../../thunk/thunk";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { editClickedMovieById } from "../../redux/action";

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

            resetForm();
            setModalState(false);
          } else {
            dispatch(postMovie(data));
          }
        }}
      >
        {({ values, isSubmitting, errors, touched, resetForm }) => (
          <Form data-testid="form-test">
            <div className="input__wrapper">
              <Field
                title="Title"
                name="modalTitle"
                placeholder="Title"
                component={InputForm}
                type="text"
                data-testid="modal-input"
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
                data-testid="modal-input2"
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
                data-testid="modal-input3"
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
                data-testid="modal-input4"
              />
              {errors.modalRating && touched.modalRating && (
                <pre style={{ color: "orange" }}>{errors.modalRating}</pre>
              )}
            </div>
            <div className="input__wrapper" data-testid="modal-input5">
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
                data-testid="modal-input6"
              />
              {errors.modalRuntime && touched.modalRuntime && (
                <pre style={{ color: "orange" }}>{errors.modalRuntime}</pre>
              )}
            </div>
            <div className="modal__content--textarea input__wrapper">
              <Field
                title="Overview"
                placeholder="Movie description"
                name="modalOverview"
                component={InputTextarea}
                data-testid="modal-input7"
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
                data-testid="modal-resetBtn"
              >
                Reset
              </button>
              {editClickedMovie ? (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-testid="editBtn-test"
                >
                  Edit
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-testid="submitBtn-test"
                >
                  Submit
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default AddModal;
