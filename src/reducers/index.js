import { APPLY_MEMORY, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY } from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        case(CLEAR_DISPLAY):
            return ({
                ...state,
                total: 0
            });
        case(APPLY_MEMORY):
            switch(action.payload) {
                case("memoryAdd"):
                    return ({
                        ...state, 
                        memory: state.total
                    });
                case("memoryReload"):
                    return ({
                        ...state, 
                        memory: calculateResult(state.memory, state.total, state.operation)
                    });
                case("memoryClear"):
                    return ({
                        ...state, 
                        memory: 0
                    });
            }
        default:
            return state;
    }
}

export default reducer;