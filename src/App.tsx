import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/Layout'
const Home = lazy(() => import('./pages/Home'))
const Pending = lazy(() => import('./pages/Pending'))
export default function App() { return <HelmetProvider><BrowserRouter basename={import.meta.env.BASE_URL}><Suspense fallback={<div className="page-loading" aria-label="Cargando página"/>}><Routes><Route element={<Layout/>}><Route index element={<Home/>}/><Route path="*" element={<Pending/>}/></Route></Routes></Suspense></BrowserRouter></HelmetProvider> }
