import { Routes, Route } from "react-router-dom";

import Firstpage from "./Firstpage"
import Dashboard from "./Dashboard"
import Calendar from "./Calendar"
import Todo from "./Todo"

function App(){
  return(
<Routes>
  <Route path="/" element={<Firstpage />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/calendar" element={<Calendar />} />
  <Route path="/todo" element={<Todo />} />
</Routes>)
}
export default App
