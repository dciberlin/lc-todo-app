import React from 'react';
import FormContainer from './FormContainer';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';
import Spinner from './Spinner';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true
    };
  }

  async componentDidMount() {
    const url = `https://ds-todo-api.now.sh/todos`;

    // fetch(url).then(response => {
    //   response.json().then(data => {
    //     this.setState({ items: data });
    //   });
    // });

    const response = await fetch(url);
    const data = await response.json();
    this.setState({ items: data, loading: false });
  }

  handleUpdate = id => {
    const items = this.state.items;
    const updatedItems = items.map(el => {
      if (id === el.id) {
        el.status = !el.status;
      }

      return el;
    });

    this.setState({ items: updatedItems });
  };

  handleAddTodo = value => {
    const newItem = {
      text: value,
      status: false,
      id: new Date().getTime()
    };

    this.setState({ items: [...this.state.items, newItem] });
  };

  render() {
    const data = this.state.items;
    const todos = data.filter(el => !el.status);
    const todones = data.filter(el => el.status);
    // const todos = data.filter(el => {if (!el.status) return el;});

    return (
      <main className="main-container">
        <FormContainer addTodo={this.handleAddTodo}></FormContainer>
        {this.state.loading ? (
          <Spinner></Spinner>
        ) : (
          <span>
            <ToDosContainer
              items={todos}
              updateFromChild={this.handleUpdate}
            ></ToDosContainer>
            <ToDonesContainer
              items={todones}
              updateFromChild={this.handleUpdate}
            ></ToDonesContainer>
          </span>
        )}
      </main>
    );
  }
}

export default MainContainer;
