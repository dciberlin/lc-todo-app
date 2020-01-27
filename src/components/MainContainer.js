import React from 'react';
import FormContainer from './FormContainer';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';
import Spinner from './Spinner';
import NotFound from './NotFound';

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
    const data = [
      {
        status: true,
        _id: '5e2dfbf4cf11250007b73900',
        text: 'hey, go somewhere',
        date: '2020-01-26T20:52:04.184Z',
        __v: 0
      },
      {
        status: true,
        _id: '5e2dfdf1cf11250007b73901',
        text: 'Type your next todo item',
        date: '2020-01-26T21:00:33.974Z',
        __v: 0
      },
      {
        status: false,
        _id: '5e2e087405047b0007b54726',
        text: 'hey ',
        date: '2020-01-26T21:45:24.014Z',
        __v: 0
      },
      {
        status: false,
        _id: '5e2e087d05047b0007b54727',
        text: 'hey you',
        date: '2020-01-26T21:45:33.905Z',
        __v: 0
      },
      {
        status: false,
        _id: '5e2e094005047b0007b54728',
        text: 'something you have to do',
        date: '2020-01-26T21:48:48.693Z',
        __v: 0
      }
    ];

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
  }

  render() {
    const data = this.state.items;
    const todos = data.filter(el => !el.status);
    const todones = data.filter(el => el.status);

    return (
      <main className="main-container">
        <FormContainer addTodo={this.handleAddTodo}></FormContainer>
        <div className="feedback">
          {this.state.feedback && (
            <small>Oops, our cat broke the internet. Please try again...</small>
          )}
        </div>
        {this.state.loading && <Spinner></Spinner>}
        {!this.state.showFriend ? (
          <span>
            <ToDosContainer items={todos}></ToDosContainer>
            <ToDonesContainer items={todones}></ToDonesContainer>
          </span>
        ) : (
          <NotFound></NotFound>
        )}
      </main>
    );
  }
}

export default MainContainer;
