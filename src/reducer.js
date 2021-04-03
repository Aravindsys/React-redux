import {combineReducers} from 'redux';

export const initialState = {
    name: {
        name: "Benito John"
    },
    role: {
          role: "Software Engineer"
    }
};

export const reducersName = (state = initialState, action) => {   
    console.log("reducer name called");
    
    switch (action.type) {
      case "Name Change": {
        return {
          ...state,
          name: action.payload.name
        };
    }
      default: {
          return state;
      }
    }
}


export const reducersRole = (state = initialState, action) => {   
    console.log("reducer role called");
    
    switch (action.type) {
      case "Role Change": {
        return {
          ...state,
          role: action.payload.role
        };
    }
      default: {
          return state;
      }
    }
}
