import React from "react";
import{BrowserRouter as Router,Routes,Route}from "react-router-dom";
import Room from"./components/Room";
import JoinRoom from "./components/JoinRoom";

const App = () => {
  return(
    
      <Router>
        <Routes>
          <Route path="/" element={<JoinRoom />} />
          <Route path="/room/:roomId" element={<Room />} />
        </Routes>
      </Router>
    
  )
}
export default App;