import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/section/Main';


const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));
const Loginpage = lazy(() => import('./pages/Loginpage'));
const Registerpage1 = lazy(() => import('./pages/Registerpage1'));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Main />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/loginpage" element={<Loginpage />} />
                    <Route path='/search/:searchId' element={<Search />} />
                    <Route path='/registerpage1' element={<Registerpage1 />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;