//import useReducer from "./User";
import userReducer from "./User";
import themeReducer from "./Theme";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer
    },
})

//configureStore가 reducer를 감싸고 있다.
//저기서 모든 state를 관리할거라는 뜻
