import fetchAnimalData from '../../API/APIs';

const GET_ANIMAL_REQUEST = 'teleFood/Animal/FETCH/GET_REQUEST';
const GET_ANIMAL_SUCCESS = 'telefood/Animal/GET_SUCCESS';
const GET_ANIMAL_FAIL = 'telefood/GET_FAIL';

const initialState = {
  loading: false,
  animalArray: [],
  error: '',
};

const getAnimalRequest = () => ({
  type: GET_ANIMAL_REQUEST,
});

const getAnimalSuccess = (animalArray) => ({
  type: GET_ANIMAL_SUCCESS,
  payload: animalArray,
});

const getAnimalFail = (error) => ({
  type: GET_ANIMAL_FAIL,
  payload: error,
});

function getAnimal() {
  return (dispatch) => {
    dispatch(getAnimalRequest());
    fetchAnimalData()
      .then((data) => {
        const animalJSON = data.map((dat, i) => ({
          id: dat.id,
          name: dat.name,
          sciName: dat.latin_name,
          group: dat.animal_type,
          active: dat.active_time,
          maxLength: dat.length_max,
          minLength: dat.length_min,
          minWeight: dat.weight_min,
          maxWeight: dat.weight_max,
          lifespan: dat.lifespan,
          habitat: dat.habitat,
          diet: dat.diet,
          geo: dat.geo_range,
          img: dat.image_link,
          pos: i,
        }));
        dispatch(getAnimalSuccess(animalJSON));
      })
      .catch((error) => {
        dispatch(getAnimalFail(error.message));
      });
  };
}

export default function AnimalReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ANIMAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ANIMAL_SUCCESS:
      return {
        ...state,
        animalArray: action.payload,
      };
    case GET_ANIMAL_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export {
  getAnimalRequest, getAnimalSuccess, getAnimalFail, getAnimal,
};
