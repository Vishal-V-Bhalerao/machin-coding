import { configureStore } from "@reduxjs/toolkit";
import { FileExplorerReducer } from "./slice/fileExplorer";

export const store = configureStore({
    reducer:{
        fileExplorer: FileExplorerReducer
    }
})

export type RootAppState =  ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch