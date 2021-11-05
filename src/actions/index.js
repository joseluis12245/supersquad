export const ADD_CHARACTER = 'ADD_CHARACTER';
export const DELETE_CHARACTER = 'DELETE_CHARACTER';

export function addCharacterById(id){
    const action = {
        type: ADD_CHARACTER,
        id
    }
    return action;
}

export function deleteCharacterById(id){
    const action = {
        type: DELETE_CHARACTER,
        id
    }
    return action;
}