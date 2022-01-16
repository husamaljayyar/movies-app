import {
  GET_CARD_START,
  GET_CARD_SUCCESS,
  GET_CARD_FAILED,
  GET_CARD_BY_ID_START,
  GET_CARD_BY_ID_SUCCESS,
  GET_CARD_BY_ID_FAILED,
} from "./cardTypesConstants";

export const cardReducer = (
  initialState = {
    isLoading: false,
    movies: [],
    success: false,
    error: "",

    movie: {
      movie: [],
      isLoading: false,
    },
  },
  action
) => {
  switch (action.type) {
    // Get all movie
    case GET_CARD_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case GET_CARD_SUCCESS:
      return {
        ...initialState,
        // movies: action.payload
        movies: [...initialState.movies, ...action.payload],
        isLoading: false,
        success: true,
      };
    case GET_CARD_FAILED:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };

    // Get movie by id
    case GET_CARD_BY_ID_START:
      return {
        ...initialState,
        movie: {
          isLoading: true,
        },
      };

    case GET_CARD_BY_ID_SUCCESS:
      return {
        ...initialState,
        movie: {
          movie: action.payload,
          isLoading: false,
        },
      };

    case GET_CARD_BY_ID_FAILED:
      return {
        ...initialState,
        movie: {
          isLoading: false,
          error: action.payload,
        },
      };

    default:
      return initialState;
  }
};
