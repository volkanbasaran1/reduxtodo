/* 
 ! store oluşturma:
 * 1. redux kütüphanesinden "createStore" methodu import edilir
 * 2. store içerisinde tutulan veriler kategorilize edilir ve her bir kategori için reducer oluşturulur.
 * 3. oluşturulan reducerlar "combineReducers metodu ile birleştirilir"
 * 4. store'a oluşturulan birleşmiş reducerlar tanıtılır
 * 5. oluşturulan store projeye tanıtılır
*/

import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";

// birden fazla reducer varsa birleştirme
const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

// store'u oluşturma ve reducerları tanıtma
const store = createStore(rootReducer);

export default store;
