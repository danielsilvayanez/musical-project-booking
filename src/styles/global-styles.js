import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Reset default margin and padding */
  body,  
  html {
    box-sizing: border-box;
    font-family: Arial, sans-serif; /* Default font */
    background-color: #f7f7f7; /* Light gray background */
    color: #333; /* Dark text color */
    line-height: 1.5;
    font-size: 16px;
  }

  /* Set box-sizing to border-box for all elements */
  *, *::before, *::after {
    box-sizing: inherit;
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 10px;
    color: darkgoldenrod;
    
  }

  p {
    color: darkgoldenrod;
  }

  /* Links */
  a {
    color: #007bff; /* Blue link color */
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  /* Container style */
  .container {
    width: 100%;
    max-width: 1200px; /* Responsive max width */
    margin: 0 auto; /* Center align container */
    padding: 0 15px; /* Add horizontal padding */
  }

  /* Responsive media query example */
  @media (max-width: 768px) {
    .container {
      padding: 0 10px; /* Adjust padding on smaller screens */
    }
  }
`;
