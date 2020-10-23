import React from 'react';
import ReactDOM from 'react-dom';
import BoxList from './BoxList';
import NewBoxForm from './NewBoxForm'

const App = () => {
  return (
    <div>
      <NewBoxForm />
      <BoxList />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));