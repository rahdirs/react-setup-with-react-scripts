export const getRulesState = store => store.rules;

export const getRuleById = (store, id) =>
    getRulesState(store) ? { ...getRulesState(store)[id], id } : {};

export const getRuleIdsList = store =>
    getRulesState(store) ? Object.keys(getRulesState(store)) : [];

export const getRules = store =>
    getRuleIdsList(store).map(id => getRuleById(store, id));

export const getRulesByCtcId = (store, id) => 
    getRules(store) ? getRules(store).filter(r => r.ctcId === id) : [];
    

export const getRequirementsByRuleId = (store, id) =>
    getRulesState(store) ? (getRulesState(store)[id] ? getRulesState(store)[id].requirements : []) : [];
