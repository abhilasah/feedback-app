import { combineReducers } from "redux";

const DEFAULT_STATE = {responses:{}, submittedAt:null}

function survey(state=DEFAULT_STATE, action:any) {
  const loadResponses='LOAD_RESPONSES';
  let reducedState: any;
  switch(action.type){
    case loadResponses:
      reducedState=action.survey;
      break;
    default:
      reducedState=state;
  }
  return reducedState;
}
const rootReducer = combineReducers({survey});

export default rootReducer;
