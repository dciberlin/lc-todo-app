import React from 'react';
import FormContainer from './FormContainer';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';
import Spinner from './Spinner';
import NotFound from './NotFound';
import { connect } from 'react-redux';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('I AM RERENDERING');
    console.log('MAINCONTAINER PROPS: ', this.props);
    return (
      <main className="main-container">
        <FormContainer addTodo={this.handleAddTodo}></FormContainer>
        <div className="feedback">
          {this.props.feedback && (
            <small>Oops, our cat broke the internet. Please try again...</small>
          )}
        </div>
        {this.props.loading && <Spinner></Spinner>}
        {!this.props.showFriend ? (
          <span>
            <ToDosContainer></ToDosContainer>
            <ToDonesContainer></ToDonesContainer>
          </span>
        ) : (
          <NotFound></NotFound>
        )}
      </main>
    );
  }
}

const mapsStateToProps = state => {
  console.log('I AM ABOUT TO RERENDER');
  return {
    feedback: state.feedback,
    loading: state.loading,
    showFriend: state.showFriend
  };
};

export default connect(mapsStateToProps)(MainContainer);
