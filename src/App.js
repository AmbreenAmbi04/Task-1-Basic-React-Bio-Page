import React from 'react';
import {Route, Routes} from 'react-router-dom';
import BioPage from './components/BioPage';

const App = () => {

return (
      <Routes>
        <Route path="/" element={<BioPage />} />
      </Routes>
);
};

export default App;