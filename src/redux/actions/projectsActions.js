import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { database } from "../../firebase/firebase"
import { ActionTypes } from "../constans/actionTypes"

export const GET_PROJESTS_START = () => ({
    type: ActionTypes.GET_PROJESTS_START,
    payload: true
})

export const fetchProjects = () => async (dispatch) => {
const databaseRef = collection(database, "database")
const queryDatabase = query(
    databaseRef,
    orderBy("id")
);
const res = await getDocs(queryDatabase);
let projectsfromFirestore = [];
res.forEach((project)=>{
    projectsfromFirestore.push({
        ...project.data()
    });
}
);

dispatch({
    type:ActionTypes.GET_PROJESTS_SUCCESS,
    payload:projectsfromFirestore
})
}
