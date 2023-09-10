import store from "./store/configureStore";
import { addTask, removeTask, completedTask, fetchTodo } from "./store/tasks";


console.log("Redux Starter Project!");

store.subscribe(() => {
    console.log("Updated", store.getState() );
})

store.dispatch( addTask(" Cooking ") );
store.dispatch( addTask(" Cleaning ") );

console.log(store.getState());

store.dispatch( completedTask(2) );

store.dispatch(removeTask(1) );
console.log(store.getState());

store.dispatch(fetchTodo());
console.log(store.getState());
