import { UPSERT_RULE, UPSERT_REQUIREMENTS, DELETE_RULE } from "../actionTypes";

export const upsertRule = rule => ({
    type: UPSERT_RULE,
    payload: rule
});

export const deleteRule = id => ({
    type: DELETE_RULE,
    payload: id
});

export const upsertRequirements = (id, requirements) => ({
    type: UPSERT_REQUIREMENTS,
    payload: { id, requirements }
});