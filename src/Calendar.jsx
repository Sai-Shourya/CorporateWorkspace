import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar(){
    const[events,setEvents] = useState(
        JSON.parse(localStorage.getItem("events")) || [
            {
                title:"Review Project 2",
                date:"2026-06-10",

            },
            {
                title:"Meeting with Manager",
                date:"2026-06-15",  
            }
        ]
    );

    useEffect(() =>{
        localStorage.setItem("events",
            JSON.stringify(events)
        )
    },[events])

    const handleDateClick=(info)=>{
        const title= prompt(`Enter task for ${info.dateStr}`);

        if (title){
            setEvents([
                ...events,
                {
                    title:title,
                    date: info.dateStr,

                },
            ]);
        }

    };

    return(
        <>
        <Navbar/>
        <div className="sidebar">
            
         <motion.div className="content" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}  exit={{ opacity: 0, y: -20 }} transition={{ duration: 1 }}>
          <div className="c1">
            <div className="c2">
                <h1>Calendar</h1>
            </div>

            <div className="c3">
                <div className="c4">
                    <FullCalendar
                    plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    ]}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    dateClick={handleDateClick}
                    events={events}
                    height="80vh"/>
                </div>

                <div className="c5">
                    <h2>Upcoming Events</h2>
                     {events.length === 0 ? (
                        <p>No Events Scheduled</p>
                        ) : (
                    events.map((event, index) => (
                        <div key={index} className="event-card">
                            <h4>{event.title}</h4>
                            <p>{event.date}</p>
                        </div>
                            ))
                             )}

                </div>
            </div>
           </div>
          </motion.div>
        </div>
        </>
    );
}

export default Calendar