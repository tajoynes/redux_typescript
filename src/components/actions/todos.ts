import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Action object properties for checking action object
// Describes action creator properties
export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodosAction {
  type: ActionTypes.deletTodos;
  payload: number;
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get<Todo[]>(url);

    // Type checking action creators to make sure action object has correct properties
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: res.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodosAction => {
  return {
    type: ActionTypes.deletTodos,
    payload: id,
  };
};
