// bu objeyi tanımla
import { ActionTypes } from "../actionTypes/todoTypes";

// aksiyon oluşturan bir fonksiyon oluşturma
// bileşen içerisinde aksiyonları dispatch ederken
//  kod tekrarına düşmemek için aksiyonları ayrı
//  bir dosyada tanımlarız eğerki aksiyonları
// payload ile değeri oluşacaksa  payload dinamik olacağı için aksiyon oluşturan bir fonksiyon yazmayı tercih ederiz
// payload'ı parametre olarak alırız
export const addTodo = (payload) => ({
  type: ActionTypes.ADD_TODO,
  payload,
});
export const editTodo = (payload) => ({
  type: ActionTypes.EDIT_TODO,
  payload,
});
export const setTodos = (payload) => ({
    type: ActionTypes.SET_TODOS,
    payload,
  });
export const deleteTodo = (payload) => ({
  type: ActionTypes.TODO_DELETE,
  payload,
});
