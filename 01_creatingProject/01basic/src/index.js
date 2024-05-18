import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// here we are accessing the "root" div of index.html file thorugh createRoot method. 
// we are rendering virtual_react-dom through .render method, where we have "app" tag(provided by react same like div tag in html.)
// And this app tag is linked to the App function() of app.js file. And that function provide the facility to write html in js. 
// At last, the app function of app.js file will be loaded/rendered to the index.html file of pubic folder.


// practicing
const customElement = (
  <a href='https://google.com' target='_blank'>visit google</a>
)
function MyApp(){
  return(
    <div>
      <div>Hacker hero from myApp</div>
      <h1>hacker hero</h1>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  customElement
);    // comment added
 // added some comment for git test
 
