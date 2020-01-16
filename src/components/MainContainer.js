import React from 'react';
import FormContainer from './FormContainer';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';
import Spinner from './Spinner';
import friend from '../images/friend.png';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
      feedback: false,
      showFriend: false
    };
  }

  async componentDidMount() {
    const url = `https://ds-todo-api.now.sh/todos`;

    // fetch(url).then(response => {
    //   response.json().then(data => {
    //     this.setState({ items: data });
    //   });
    // });
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.length === 0)
        this.setState({
          items: data,
          loading: false,
          feedback: false,
          showFriend: true
        });
      else {
        this.setState({
          items: data,
          loading: false,
          feedback: false,
          showFriend: false
        });
      }
    } catch (error) {
      this.setState({ feedback: true });
    }
  }

  handleUpdate = async item => {
    const url = `https://ds-todo-api.now.sh/todos/${item._id}`;
    const status = !item.status;
    this.setState({ loading: true });
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      });
      const data = await response.json();
      const items = this.state.items;
      const updatedItems = items.map(el => {
        if (item._id === el._id) {
          el.status = !el.status;
        }
        return el;
      });

      this.setState({
        items: updatedItems,
        loading: false,
        feedback: false
      });
    } catch (error) {
      this.setState({ feedback: true });
    }
  };

  handleAddTodo = async value => {
    const url = `https://ds-todo-api.now.sh/todos`;
    this.setState({ loading: true });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: value })
      });
      const item = await response.json();
      this.setState({
        items: [...this.state.items, item],
        feedback: false,
        showFriend: false,
        loading: false
      });
    } catch (error) {
      this.setState({ feedback: true });
    }
  };

  render() {
    const data = this.state.items;
    const todos = data.filter(el => !el.status);
    const todones = data.filter(el => el.status);
    // const todos = data.filter(el => {if (!el.status) return el;});

    return (
      <main className="main-container">
        <FormContainer addTodo={this.handleAddTodo}></FormContainer>
        <div className="feedback">
          {this.state.feedback && (
            <small>Oops, our cat broke the internet. Please try again...</small>
          )}
        </div>
        {this.state.loading && <Spinner></Spinner>}
        {!this.state.showFriend > 0 ? (
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
        ) : (
          <div className="empty-screen">
            <img src={friend}></img>
            <p>Use the form to create a new todo!</p>
          </div>
        )}
      </main>
    );
  }
}

export default MainContainer;
