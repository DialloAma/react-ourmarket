import { applyMiddleware, combineReducers, createStore } from "redux";
import { productReduce } from "../Reducers/productReducer";
import firebase from "../Firebase/config";
import thunk from "redux-thunk";
import { firebase, reduxReactFirebase } from "react-redux-firebase";
import { reduxFirestore } from "redux-firestore";
import { firestore } from "firebase";

const reducer=combineReducers({
    product :productReduce
})
const store=createStore(reducer ,compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
reduxReactFirebase(firebase),
reduxFirestore(firestore)))

export default store;
