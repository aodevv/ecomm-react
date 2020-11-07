import {Switch, Route} from 'react-router-dom';
import './App.css';
import {HomePage} from './pages/homepage/homepage';
import ShopPage from './pages/shop/ShopPage';
import Auth from './pages/auth/Auth';
import Header from './components/header/Header';



function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={Auth}/>
      </Switch>
    </div>
  );
}

export default App;
