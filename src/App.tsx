import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ImpactPage from './pages/ImpactPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import ContactPage from './pages/ContactPage';
import AdminLogin from './pages/auth/AdminLogin';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/"
          element={
            <Layout>
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="programs" element={<ProgramsPage />} />
                <Route path="impact" element={<ImpactPage />} />
                <Route path="get-involved" element={<GetInvolvedPage />} />
                <Route path="contact" element={<ContactPage />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;