import React from 'react';
import FormContainer from './FormContainer';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { text: 'Do your thing', status: false, id: 1407892 },
        { text: 'Be yourself', status: true, id: 1467892 },
        { text: 'Explain something', status: false, id: 5436436 },
        { text: 'Be a dog', status: true, id: 4363434 },
        { text: 'Bite a tree', status: false, id: 1411892 },
        { text: 'Plant a tree', status: false, id: 1117892 },
        { text: 'Save the world', status: true, id: 5436222 },
        { text: 'Achieve world peace', status: false, id: 4363333 }
      ]
    };
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

  render() {
    const data = this.state.items;
    const todos = data.filter(el => !el.status);
    const todones = data.filter(el => el.status);
    // const todos = data.filter(el => {if (!el.status) return el;});

    return (
      <main className="main-container">
        <FormContainer></FormContainer>
        <ToDosContainer
          items={todos}
          updateFromChild={this.handleUpdate}
        ></ToDosContainer>
        <ToDonesContainer
          items={todones}
          updateFromChild={this.handleUpdate}
        ></ToDonesContainer>
      </main>
    );
  }
}

export default MainContainer;
