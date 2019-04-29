import React, {useState} from 'react';
import {connect} from 'react-redux'
import {ADD_TODO, addTodo} from './redux/actions'
import './App.css';


function App({todos,test, dispatch}) {
  const [todo, setTodo] = useState("");
  console.log(todos, test);

  return (
    <div className="App" style={{margin: 'auto', width: 400}}>
      <h1>Todo List</h1>
      <ul>
        {todos && todos.map((td, idx) => (
          <li>{td}</li>
        ))}
      </ul>
      Length: {todos && todos.length}
      <hr />

      <form onSubmit={e => {
        e.preventDefault();
        dispatch({type: ADD_TODO, todo});
        setTodo("");
      }}>
        <input placeHolder="Enter todo"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        ></input>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  test: "acb"
});

export default connect(mapStateToProps)(App);
