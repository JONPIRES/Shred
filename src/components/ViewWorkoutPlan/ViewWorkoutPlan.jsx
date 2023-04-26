import React from "react";


function ViewWorkoutPlan() {
    return (
        <div className="container" style={{minHeight:'100vh', height:'auto'}}>
            <h1 className="text-center mt-3">Workout Plan</h1>
            <ul className="container ">
                <li>Day 1 - Chest</li>
                <ul>
                    <li>Pushups</li>
                    <ul>
                        <li>Reps x Sets</li>
                    </ul>
                    <li>Chest Press</li>
                    <ul>
                        <li>Reps x Sets</li>
                    </ul>
                    <li>Burpees</li>
                    <ul>
                        <li>Reps x Sets</li>
                    </ul>
                </ul>
                <li>Day 2 - Legs</li>
                <ul>
                    <li>Squats</li>
                    <ul>
                        <li>Reps x Sets</li>
                    </ul>
                    <li>Jump Rope</li>
                    <ul>
                        <li>Reps x Sets</li>
                    </ul>
                    <li>Leg Press</li>
                    <ul>
                        <li>Reps x Sets</li>
                    </ul>
                </ul>
                <li>Day 3 - Abs</li>
                <ul>
                    <li>Jog</li>
                    <ul>
                        <li>Reps x Sets</li>
                    </ul>
                    <li>Jump Rope</li>
                    <ul>
                        <li>Reps x Sets</li>
                    </ul>
                    <li>Pull Ups</li>
                    <ul>
                        <li>Reps x Sets</li>
                    </ul>
                </ul>
            </ul>

        </div>
    )

}

export default ViewWorkoutPlan;