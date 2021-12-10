import React from 'react';
import PageLayout from './containers/layout/PageLayout';
import TextFieldImages from './components/TextFieldImage/TextFieldImage';
import champion from "./resources/Nautilus.png";

function App() {
  return (
    <PageLayout>
      <TextFieldImages
        championImg={champion}
      />
    </PageLayout>
  );
}

export default App;
