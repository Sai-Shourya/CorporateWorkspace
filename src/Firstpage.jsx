import { motion } from "framer-motion";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

function Firstpage(){
    const navigate = useNavigate();
    return(
         
        <motion.div className="a1" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="a2">Your company, all in one place</span>
            <button onClick={() => navigate("/dashboard")}>Enter Workspace </button>

        </motion.div>
    );
}

export default Firstpage