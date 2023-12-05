import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CreateWorkout from './pages/Create'; // Import the CreateWorkout component
import Exercise from "./pages/Exercise";
import WorkoutPlan from "./pages/WorkoutPlan";


class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<WorkoutPlan />} />
                        <Route path="/exercise-list" element={<Exercise />} />
                        <Route path="/create" element={<CreateWorkout />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;