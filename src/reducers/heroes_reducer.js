import {ADD_CHARACTER, DELETE_CHARACTER} from '../actions';
import { createCharacter } from './helpers';

function heroes(state = [], action){
    switch(action.type){
        case ADD_CHARACTER:
            let heroes = [...state, createCharacter(action.id)];
            return heroes;
        
        case DELETE_CHARACTER:
            let heroesDeleted = state.filter(x => x.id !== action.id);
            return heroesDeleted;

        default: 
        return state;
    }
}

export default heroes;