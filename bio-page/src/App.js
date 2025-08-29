import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import BioPage from './components/BioPage';

const App = () => {

return (
    <BrowserRouter>
      <Routes>
        <Route path="/bio-page" element={<BioPage />} />
      </Routes>
    </BrowserRouter>
);
};

export default App;