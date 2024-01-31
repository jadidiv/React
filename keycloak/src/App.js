import './App.css';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className='welcome'>
        <h1>Welcome !</h1>
        <h3>User Authentication with Keycloak – React front-end</h3>
        <p>Providing authentication and authorization for the non-public-facing components of your application is an important part of many systems.</p>
        <p>Keycloak is an open source Identity and Access Management solution aimed at modern applications and services. It makes it easy to secure applications and services with little to no code. Authentication with Keycloak brings to the table virtually every feature you might want regarding user authentication and authorization.</p>
        <div className='navigation'><NavLink to={ 'managment' }> Go to Secure Page !</NavLink></div>
      </div>
    </div>
  );
}

export default App;
