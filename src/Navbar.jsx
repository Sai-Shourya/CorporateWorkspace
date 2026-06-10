import "./Navbar.css"
import { useNavigate } from "react-router-dom";

function Navbar(){
    
    const navigate = useNavigate();

    return(
        

        <div className="d1">
            <h2>Corporate Workspace</h2>
            <input placeholder= "Search...." type ="text"></input>
            <div>Employee id: 4677259</div>

         <div className="f1">
            
            <button className="p4" onClick={()=> navigate("/dashboard")}>
                Dashboard
            </button>

            <button className= "p3" onClick={()=> navigate("/calendar")}>
               Calendar
            </button>

            <button  className="p2" onClick={()=> navigate("/todo")}>
                To Do
            </button>

            <button className="p1" onClick={() => navigate("/")}>Logout</button>

         </div>
        </div>
    );
}

export default Navbar