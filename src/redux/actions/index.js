export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const GET_JOBS = "GET_JOBS";

const baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?search=";

export const addToFavouritesAction = (data) => ({
  type: ADD_TO_FAVOURITES,
  payload: data,
});

export const removeFromFavouritesAction = (id) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: id,
});

export const getJobsAction = (query) => {
  return async (dispatch, getState) => {
    try {
        console.log(query)
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
