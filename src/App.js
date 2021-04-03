import logo from './logo.svg';
import './App.css';
import Home from './home';
import React from 'react';
import {Provider} from 'react-redux';
import {ConfigureStore} from './configureStore';
import Role from './roleComponent';

const store = ConfigureStore();
class App extends React.Component {
  

  constructor(props){
    super(props);
  
  }

 
  render(){
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Home />
       
      </header>
    </div>
    </Provider>
  );
}

}
export default App;
