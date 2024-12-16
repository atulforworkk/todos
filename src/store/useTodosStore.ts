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

export const useTodoStore=create<TodoList>((set)=>(

))


type CounterStore= {
    count:number;
    increment:()=>void;
    decrement:()=>void;
}
export const useCounterStore =create<CounterStore>((set)=>({
    count:0,
    increment:()=>{
        set({count:1});
    },
    decrement:()=>{
        set({count:-1});
    }
}))