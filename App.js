import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeComponent from "./modules";


import Layout from "./pages/Layout";


function App() {
    return (
      
        <>
           <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeComponent />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
        
       
        


         
        {/* <HomeComponent/> */}
        
        
        </>
        

    );


    
}


export default App;

