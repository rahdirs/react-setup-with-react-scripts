import { UPSERT_RULE, UPSERT_REQUIREMENTS, DELETE_RULE} from "../actionTypes";

const initialState = {
};

const initialRuleState = {
    data: '',
    ruleType: '',
    requirements: []
};

function rule(state = initialRuleState, action) {
    switch (action.type) {
        case UPSERT_RULE: {
            const { requirements } = action.payload;
            return {
                ...action.payload,
                requirements: (requirements === undefined) ? state.requirements : requirements
            };
        }
        case UPSERT_REQUIREMENTS: {
            const { id, requirements } = action.payload;
            return {
                ...state,
                requirements
            };
        }
        default:
            return state;
    }
    
}


export default function rules (state = initialState, action) {
    switch (action.type) {
        case UPSERT_RULE: {
            const { id } = action.payload;
            return {
                ...state,
                [id]: rule(state[id], action)
            };
        }
        case DELETE_RULE: {
            const id = action.payload;
            delete state[id];
            return state;
        }
        case UPSERT_REQUIREMENTS: {
            const { id, requirements } = action.payload;
            return {
                ...state,
                [id]: rule(state[id], action)
            };
        }
        default:
            return state;
    }
}