import '../style/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/Sidebar';
import { Route, Routes } from 'react-router';
import DepatmentPage from './DepatmentPage';
import EmployeePage from './EmployeePage';
import Main from './Main';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDepartments } from '../store/departmentsSlice';

const App: React.FC = () => {
  const dispatch = useDispatch<any>()
  
  useEffect(() => {
    dispatch(fetchDepartments())
  }, [])
  return (
    <div className="app">
      <Sidebar />
      <div className='main'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/departments" element={<DepatmentPage />} />
          <Route path="/departments/:id/:id" element={<EmployeePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
