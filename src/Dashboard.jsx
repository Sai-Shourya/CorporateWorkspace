import { useState } from "react";
import Navbar from "./Navbar";

function Dashboard(){
    return(
        <>
        <Navbar/>
        <div className="sidebar">
            
         <div className="content">
          <div className="b1">
            <h1> Hey, Employee</h1>
            <p>Here's what's happening today.</p>

            <div className="b2">
                <div className="b3">
                    <h2>3</h2>
                    <span>Today's Meetings</span>
                </div>
                <div className="b4">
                    <h2>7</h2>
                    <span>Pending tasks</span>
                </div>
                <div className="b5">
                    <h2>9</h2>
                    <span>Completed tasks</span>
                </div>
                <div className="b6">
                    <h2>2</h2>
                    <span>Leaves taken this month</span>
                </div>
            </div>

            <div className="b7">
                <h2>Today's Meetings</h2>
                <div className="b8">
                    10:30 AM - Project Review
                </div>
                <div className="b9">
                    2 PM - Group Discussion
                </div>
                <div className="b10">
                    4 PM - Planning
                </div>

            </div>

            <div className="b11">
                <h2>Task overview</h2>
                <div className="b12">
                    7 - Pending Tasks
                </div>
                <div className="b13">
                   9 - Completed Taks
                </div>
                <div className="b14">
                    3 - In Progress
                </div>

            </div>

            <div className="b15">
                <h2>Quick Notes</h2>
                <textarea placeholder="Write Notes....."></textarea>
            </div>

            <div className="b16">
                <h2>Announcements</h2>
                <div className="b17">
                    Office remains closed this Thursday
                </div>
                <div className="b18">
                   The project deadline has been extended by 3 days
                </div>
               
            </div>
           </div>
          </div>
        </div>
        </>

    );
}

export default Dashboard