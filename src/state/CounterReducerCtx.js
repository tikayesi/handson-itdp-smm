import ActionType from "./GlobalActionType";

export const initial = {nilai : 5};
export const reducer = (state, action) => {
  switch(action.type) {
    case ActionType.PLUS:
      {
      return {...state, nilai: state.nilai + 1}
    }
    case ActionType.MINUS:{
      if(state.nilai > 0){
        return {...state, nilai: state.nilai - 1}
      }else{
        return state
      }
    }
    default: return state
  }
}
