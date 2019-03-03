import axios from 'axios';
// export CONSTANT_VARIABLES here
export const GET_PROJECTS = 'GET_PROJECTS';

// export const action () => ({})
const url = 'http://localhost:4000/api/';
export const getProjects = () => dispatch => {
  axios
    .get(`${url}projects/1`)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_PROJECTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
