import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Pages from './Pages/Pages';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Pages></Pages>
      <ToastContainer />
    </>
  );
}

export default App;
