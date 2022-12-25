import React from 'react';
import logo from './logo.svg';
import './App.css';
//import MyComponent from './components/Greet'

// use the named export:
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
// those are also effective in child components
import './appStyles.css'
// The must end with .module.css !
// They will not work in child components as it will not compile
// However, that is also useful to avoid CSS conflicts
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';

function App() {
  return (
    <div className="App">
      <LifecycleA/>
    {/*       <Form/>
     <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <NameList/>
      <Stylesheet primary={true}/>
      <Inline/>
           <UserGreeting/>

      <FunctionClick/>
      <ClassClick someprop="somepropvalue"/>
     <EventBind/>
      <ParentComponent/>
    <Greet name="Bruce" heroName="Batman"/>
      <p> This is children props from App </p>
      <Greet name="Clark" heroName="Superman"/>
      <Greet name="Sascha" heroName="Saschman"/>
<Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Sascha" heroName="Saschaman"/>
      <Hello/>
      <Message/>
      <Counter/>*/}
    </div>
  );
}

export default App;
