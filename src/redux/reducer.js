const initialState = {
  movies: [],
  clickedMovie: null,
  genreList: [
    { id: 1, title: "All", checked: false },
    { id: 2, title: "Documentary", checked: false },
    { id: 3, title: "Comedy", checked: false },
    { id: 4, title: "Horror", checked: false },
    { id: 5, title: "Crime", checked: false },
  ],
  editClickedMovie: null,
  onSuccessEdit: false,
  deleteClickedMovie: null,
  onSuccessDelete: false,
  onSuccess: false,
  onError: { state: false, msg: null },
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, movies: [...action.payload] };
    case "CLICK_MOVIE":
      return { ...state, clickedMovie: action.payload };
    case "RESET_CLICKED_MOVIE":
      return { ...state, clickedMovie: null, editClickedMovie: null };
    case "EDIT_CLICKED_MOVIE":
      return { ...state, editClickedMovie: action.payload };
    case "ON_SUCCESS_TOGGLE":
      return { ...state, onSuccessEdit: action.payload };
    case "DELETE_CLICKED_MOVIE":
      return { ...state, deleteClickedMovie: action.payload };
    case "ON_SUCCESS_DELETE":
      return { ...state, onSuccessDelete: action.payload };
    case "ON_SUCCESS":
      return {
        ...state,
        onSuccess: true,
        onError: { state: false, msg: null },
      };
    case "RESET_SUCCESS":
      return { ...state, onSuccess: false };
    case "ON_ERROR":
      return {
        ...state,
        onError: { state: true, msg: action.payload },
        onSuccess: false,
      };

    default:
      return state;
  }
}

export default movieReducer;
