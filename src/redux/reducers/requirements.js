import { UPSERT_REQUIREMENTS } from "../actionTypes";

const initialState = {};


export default function requirementsByRuleId(state = initialState, action) {
    switch (action.type) {
        case UPSERT_REQUIREMENTS: {
            const { ruleId, requirements } = action.payload;
            return {
                ...state,
                [ruleId]: requirements
            };
        }
        default:
            return state;
    }
}