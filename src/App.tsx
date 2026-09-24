import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/Layout'
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const Service = lazy(() => import('./pages/Service'))
const Prices = lazy(() => import('./pages/Prices'))
const Studio = lazy(() => import('./pages/Studio'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Project = lazy(() => import('./pages/Project'))
export default function App() { return <HelmetProvider><BrowserRouter basename={import.meta.env.BASE_URL}><Suspense fallback={<div className="page-loading" aria-label="Cargando página"/>}><Routes><Route element={<Layout/>}><Route index element={<Home/>}/><Route path="servicios" element={<Services/>}/><Route path="servicios/:slug" element={<Service/>}/><Route path="precios" element={<Prices/>}/><Route path="estudio" element={<Studio/>}/><Route path="contacto" element={<Contact/>}/><Route path="portafolio" element={<Portfolio/>}/><Route path="portafolio/:slug" element={<Project/>}/><Route path="*" element={<NotFound/>}/></Route></Routes></Suspense></BrowserRouter></HelmetProvider> }
