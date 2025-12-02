import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import FoldersViewer from './component/folder-section/folders-viewer.tsx';
import Patient from './component/folder-section/patient.tsx';
import Emergency from './component/emergency-section/emergency.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="emergency" element={<Emergency />} />
        <Route path='folders' element={<FoldersViewer></FoldersViewer>}>
          <Route path=':patient' element={<Patient></Patient>}></Route>
        </Route>
      </Routes>

    </StrictMode>
  </BrowserRouter>,
)
