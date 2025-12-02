import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App(){
  return(<div>
   <BrowserRouter>
       <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/SignUp" element={<SignUpPage/>}/>
    </Routes>
   </BrowserRouter>
  </div>)
}
export default App;