import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './JS/actions/auth';

import DashboardAdmin from './Pages/DashboardAdmin/DashboardAdmin';
import LawyersDetails from './Pages/LawyersDetails/LawyersDetails';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import LawyersEdit from './Pages/LawyersEdit/LawyersEdit';
import Register from './Pages/Register/Register';
import Lawyers from './Pages/Lawyers/Lawyers';
import Alerts from './Pages/Alerts/Alerts';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';

import PrivateAdmin from './Private/PrivateAdmin';
import Private from './Private/Private';

import './App.css';

function App() {
  const [serchInput, setSerchInput] = useState("tout")

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(getCurrentUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Alerts />
      <Routes>
        <Route path='/' element={<Home setSerchInput={setSerchInput} />} />
        <Route path='/connecter' element={<Login />} />
        <Route path='/enregistrer' element={<Register />} />
        <Route path='/motdepasse/oubliée' element={<ForgetPassword />} />
        
        <Route path='/avocats' element={<Lawyers setSerchInput={setSerchInput} serchInput={serchInput} />} />
        <Route path='/avocats/:avocatID' element={<LawyersDetails />} />
        <Route path='/avocats/editer/:avocatID' element={<LawyersEdit />} />

        <Route path='/profile' element={<Private />} />
        <Route path='/tableau-de-bord' element={<PrivateAdmin><DashboardAdmin /></PrivateAdmin>} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
