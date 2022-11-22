import { DeleteTodosAction, FetchTodosAction } from "./todos";

export enum ActionTypes {
  fetchTodos,
  deletTodos,
}

// Action alias type to handle multiple actions as a single export
export type Action = FetchTodosAction | DeleteTodosAction;
