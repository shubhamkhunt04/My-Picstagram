import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';

const App = () => {
  return (
    <div className='App'>
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  );
};

export default App;
