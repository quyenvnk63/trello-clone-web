import React from 'react';
import './App.scss';


//custom components
import Appbar from 'components/Appbar/Appbar';
import Boardbar from 'components/Boardbar/Boardbar';
import Boardcontent from 'components/Boardcontent/Boardcontent';

function App() {
  return (
    <div className="trello-master">
      <Appbar />
      <Boardbar />
      <Boardcontent />

    </div>
  );
}

export default App;
