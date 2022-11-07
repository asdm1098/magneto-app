import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Form } from '../components/form/pages/Form';
import { Home } from '../components/form/pages/Home';
import { TextList } from '../components/form/pages/TextList';
import logo from '../logo.svg';


export const Navigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/texts' element={ <TextList /> } />
            <Route path='/form' element={ <Form /> } />
            <Route path='/home' element={ <Home /> } />
            <Route path='/*' element={ <Navigate to='/home' replace /> } />
        </Routes>
    </BrowserRouter>
  )
}
