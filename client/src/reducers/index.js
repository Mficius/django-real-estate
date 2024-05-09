import { combineReducers } from "redux";
import { propertiesListReducer } from './proprertyReducers';

export default combineReducers({
    propertiesList: propertiesListReducer,
});

