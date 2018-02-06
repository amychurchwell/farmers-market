import React from 'react';
import Header from './Header';
import Body from './Body';

function App() {
  return (
    <div>
      <style jsx global>{`
        body {
          font-family: Helvetica;
        }
      `}</style>
      <Header />
      <Body />
    </div>
  );
}

export default App;
