import {configureStore} from "@reduxjs/toolkit";
import { UserReducer } from "../Reducers/UserReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

export default  configureStore({
    reducer: { user: UserReducer },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk).concat(logger),
    devTools: [composeWithDevTools]
})

// export const store = configureStore({
//     reducer: persistReducer,  
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })