import React from 'react';
import { addTodo, showLoading } from '../actions';
import { connect } from 'react-redux';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ value: '' });
    this.props.showLoading();
    setTimeout(() => {
      this.props.addTodo(this.state.value);
    }, 2000);
  }

  render() {
    return (
      <div className="form-container">
        <form className="todo-form" onSubmit={this.handleSubmit}>
          <label className="input-item">
            <input
              type="text"
              name="todo"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input className="btn" type="submit" value="ADD" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { addTodo, showLoading })(
  FormContainer
);
