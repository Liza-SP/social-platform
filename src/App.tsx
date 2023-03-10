import React, { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './styles/index.scss';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';


export default function App() {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPageAsync />}/>
          <Route path='/about' element={<AboutPageAsync />}/>
        </Routes>
      </Suspense>
    </div>
  )
}