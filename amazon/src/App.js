import React from 'react';
import Header from './components/Header'
import {LoginComponent} from './components/Login';
//this is called pure component or stateless component
const App= ()=>{
    const companyName= 'Pega Systems';
    return <div>
        <Header title={companyName}/>
        <LoginComponent/>

        </div>;
};
export default App;

