import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
/* import Contact from './pages/Contact/Contact';
import reportWebVitals from './reportWebVitals';
import Blogs from './pages/Blogs/Blogs';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Information from './pages/Information/Information';
import Profile from './pages/Profile/Profile';
import Create from './pages/Create/Create';
import Creates1 from './pages/Create-s1/Creates1';


const router = createBrowserRouter([
{ path:"/", element: <App/>,},
{ path:"/blogs", element: <Blogs/>,},
{ path:"/services", element: <Services/>,},
{ path:"/contact", element: <Contact/>,},
{ path:"/about" , element: <About/>,},
{ path:"/information" , element: <Information/>,},
{ path:"/create" , element: <Create/>,},
{ path:"/create-s1" , element: <Creates1/>,},
{ path:"/profile" , element: <Profile/>,},
]); */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <App />

    </React.StrictMode>
);
reportWebVitals();
