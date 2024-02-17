import React from 'react';
import logo from './logo.svg';

import Button from '@mui/material/Button';
// import { colors } from '@mui/material';

// import { memo } from 'react';
// import type { FC } from 'react';
// import './App.css';

// import classes from './App.module.css';
// import resets from './components/_resets.module.css';
// import { LoadingPage } from './components/LoadingPage/LoadingPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button sx={{backgroundColor: '#E8998D'}} className="btn" variant="contained">Contained</Button>
      </header>
    </div>
  );
}

// interface Props {
//   className?: string;
// }
// export const App: FC<Props> = memo(function App(props = {}) {
//   return (
//     <div className={`${resets.storybrainResets} ${classes.root}`}>
//       <LoadingPage />
//     </div>
//   );
// });

export default App;
