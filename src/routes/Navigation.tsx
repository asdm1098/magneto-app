import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../components/form/pages/Home';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/home' element={ <Home /> } />
            <Route path='/*' element={ <Navigate to='/home' replace /> } />
        </Routes>
    </BrowserRouter>
  )
}
