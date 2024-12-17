import { createReducer } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";


const initialState: Grocery[] = [
    {"id" : 1, "name": "Milk", "type": "fruit"},
    {"id" : 2, "name": "Bread", "type": "snacks"},
    {"id" : 3, "name": "Banana", "type": "fruit"},
    {"id" : 4, "name": "Butter", "type": "snacks"}
];

export const groceryReducer = createReducer(initialState);