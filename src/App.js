import "./App.css";
import Navbar from "./components/Shared/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Pages/Home/Home";
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import FacebookPages from "./components/Pages/FacebookPages";
import FacebookVideos from "./components/Pages/FacebookVideos";
import FacebookGroups from "./components/Pages/FacebookGroups";
import FacebookGames from "./components/Pages/FacebookGames";

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="app__body">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages" element={<FacebookPages/>} />
            <Route path="/watch" element={<FacebookVideos />} />
            <Route path="/groups" element={<FacebookGroups />} />
            <Route path="/games" element={<FacebookGames />} />
          </Routes>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
