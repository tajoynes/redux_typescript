import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "./actions/index";
import { StoreState } from "./reducers/index";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
  deleteTodo: typeof deleteTodo;
}

class _State extends React.Component<AppProps> {
  // componentDidMount() {
  //   this.props.fetchTodos();
  // }
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };
  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderTodos(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  }
  render() {
    return (
      <div>
        Test
        <button onClick={this.onButtonClick}>Get Todos List</button>
        <div>{this.renderTodos()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export const State = connect(mapStateToProps, { fetchTodos, deleteTodo })(
  _State
);
