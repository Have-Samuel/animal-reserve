import { applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import AnimalReducer, { getAnimalFail, getAnimalSuccess } from '../redux/animals/animal';

const rootReducer = combineReducers({
  animal: AnimalReducer,
});
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

describe('AnimalReducer', () => {
    it('grt error msg if error state is equal to new msg', () => {
      const newMsg = 'Error fetching data';
      store.dispatch(getAnimalFail(newMsg));
      console.log(store.getState().animal.error);
      expect(store.getState().animal.error).toEqual(newMsg);
    });
    
    // The mock for fetching Data
    it('Fetching data using getAnimalSuccessAction', () => {
      const newAnimalArrayData = [{
        id: 70,
        sciName: "Vulpes zerda",
        diet: "Fruit, seeds, eggs, termites, and lizards",
      }];
      store.dispatch(getAnimalSuccess(newAnimalArrayData));
      console.log(store.getState().animal);
      expect(store.getState().animal.animalArray).toEqual(newAnimalArrayData);
    });
  });
