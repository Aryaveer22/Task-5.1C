import React from 'react';
import { createRoot } from 'react-dom/client';
import PostPage from './PostPage'; 
import './index.css'; 

// Define a simple functional component
const MyComponent = () => {
  return (
    <div className="MyComponent">
      <PostPage /> 
    </div>
  );
};

// Get the root container element
const container = document.getElementById('root');

// Create a root and render the component
const root = createRoot(container);
root.render(<MyComponent />);
