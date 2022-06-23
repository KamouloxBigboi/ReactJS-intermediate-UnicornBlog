import "./App.css";
import {
BrowserRouter,
Routes,
Navigate,
Route,
} from "react-router-dom";


import Home from "./components/home";
import Details from "./components/details";
import Gallery from "./components/gallery";
import Upload from "./components/upload";
import Navbar from "./components/Navbar";


function App() {

    let Component 
    switch (window.location.pathname) {
      case "/":
        Component = <Home />
        break;
      case "/gallery":
        Component = <Gallery />
        break;
      case "/upload":
        Component = <Upload />
        break;
      case "/details":
        Component = <Details />
        break;
    }
    return (
      <Component />
// 	<>
//   <BrowserRouter>
//     <Routes>
    
//         <Route path="/" element={<Home />} />
      
//         <Route path="/details" element={<Details />} />
        
//         <Route path="/navbar" element={<Navbar />} />

//         <Route path="/upload" element={<Upload />} />

//         <Route path="/gallery" element={<Gallery />} />
        
//         // Redirection de la page par défaut vers J

//         <Route
//             path="*"
//             element={<Navigate to="/" replace />}
//         />
//     </Routes>
//   </BrowserRouter>
// </>
 )
}

export default App;
