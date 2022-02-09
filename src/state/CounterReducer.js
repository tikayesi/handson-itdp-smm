import ActionType from "./GlobalActionType";

const initialState = {
    nilai: 5,
    todos : [{
        todo: "test",
        desc : "test"
      }],
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.PLUS:
            return {...state, nilai: state.nilai + 1};
        case ActionType.MINUS:
            if(state.nilai > 0){
            return {...state, nilai: state.nilai - 1};
            }else{
                return state
            }
        case ActionType.ADD:
            console.log("payload", action.payload);
            return{
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state;
    }
}

export default counterReducer;