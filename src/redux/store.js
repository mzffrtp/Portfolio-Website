import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { themeReducer } from "./reducers/themeReducer";
import thunk from "redux-thunk"
import { projectsReducer } from "./reducers/projectsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    themeState: themeReducer,
    projectsState: projectsReducer
});

const store = createStore (
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store;