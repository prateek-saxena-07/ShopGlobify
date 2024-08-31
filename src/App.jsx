import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import {Provider} from 'react-redux'
import appStore from './utils/appStore';

//App Component with NavBar on every page with various Outlets as per URL wrapped in AppStore for accessing Global States

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Header></Header>
        <br />
        <Outlet></Outlet>
      </Provider>
    </>
  );
  
}

export default App;
