import {
  GET_CARD_START,
  GET_CARD_SUCCESS,
  GET_CARD_FAILED,
  GET_CARD_BY_ID_START,
  GET_CARD_BY_ID_SUCCESS,
  GET_CARD_BY_ID_FAILED,
} from "./cardTypesConstants";
import axios from "axios";

// Get Data
export const getData = (page) => async (dispatch) => {
  dispatch({
    type: GET_CARD_START,
  });
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=dcf2d1463b5703e25fc8d86eb0fce187&page=${page}`
    );

    dispatch({
      type: GET_CARD_SUCCESS,
      payload: response.data.results,
    });
  } catch (e) {
    dispatch({
      type: GET_CARD_FAILED,
      payload: e?.response?.message,
    });
  }
};

// Get Data by id
export const getMovie = (id) => async (dispatch) => {
  dispatch({
    type: GET_CARD_BY_ID_START,
  });
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=dcf2d1463b5703e25fc8d86eb0fce187`
    );
    dispatch({
      type: GET_CARD_BY_ID_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_CARD_BY_ID_FAILED,
      payload: e?.response?.message,
    });
  }
};
