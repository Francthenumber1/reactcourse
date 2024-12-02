// Import StrictMode from React. This is a development tool that helps catch potential issues in the app,
// like using deprecated code or unsafe practices. It adds checks and warnings but has no effect in production.
import { StrictMode } from 'react'

// Import createRoot from the React DOM client. This is the new method in React 18+ to render
// the app into the DOM, enabling support for concurrent rendering (for better performance).
import { createRoot } from 'react-dom/client'

// Import the global CSS file. This file contains styling that will apply to the entire app,
// such as resets, fonts, and base styles.
import './index.css'

// Import the main App component, which is the root component of our application.
// App will contain and manage all other components that make up the app's UI.
import App from './App.jsx'

// Select the HTML element with the ID 'root' as the place where we want React to render our app.
// This is usually a <div id="root"></div> in the main HTML file (e.g., index.html).
createRoot(document.getElementById('root')).render(
  // Wrap the App component in StrictMode. This enables extra checks and warnings
  // in development mode, helping us to write safe and future-proof code.
  <StrictMode>
    {/* Render the App component, which is the main entry point of our React application.
        The entire UI of the app will be contained within this component. */}
    <App />
  </StrictMode>,
)
