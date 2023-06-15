import logo from './logo.svg';
import './App.scss';
import '@picocss/pico'
//routing
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './layout/Layout';
import LayoutAdmin from './layout/admin/LayoutAdmin'
import Home from './views/Home'
import HomeAdmin from './views/admin/HomeAdmin'
import NotFound from './views/NotFound';
import HaveService from './views/ViborgHaveService';
import CreateService from './views/admin/CreateService'
import AdminService from './views/admin/AdminService';
import EditService from './views/admin/EditService';



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* PUBLIC */}

        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='haveservice' element={<HaveService />} />
          <Route path='*' element={<NotFound />} />
        </Route>

        {/* ADMIN */}

        <Route path='/admin' element={<LayoutAdmin />}>
          <Route index element={<HomeAdmin />} />
          <Route path='createnew' element={<CreateService />} />
          <Route path='adminservice' element={<AdminService />} />
          <Route path='editservice/:id' element={<EditService />} />
          <Route path='*' element={<NotFound />} />
        </Route>

      </>
    )
  )

  return (
    <main className='container'>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
