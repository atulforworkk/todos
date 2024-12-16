import { create } from "zustand";

type TodoStore= {
    id:number;
    newTask:string;
    descriptiuon :string;
    date:string;
}
type TodoList ={
    TodoStore: TodoStore[];
}

export const useTodoStore=create<TodoList>((set)=>{
    
})