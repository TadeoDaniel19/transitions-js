import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#212121' },
    secondary: { main: '#ffc107' },
  },
  status: {
    danger: 'orange',
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);
