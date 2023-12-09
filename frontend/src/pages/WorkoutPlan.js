import React, { useState, useEffect } from 'react';
import NavBar from "../navigation/Navigation";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';

const WorkoutPlan = () => {
    const [workoutPlans, setWorkoutPlans] = useState([]);
    const [selectedDays, setSelectedDays] = useState(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const [generatedWorkoutPlan, setGeneratedWorkoutPlan] = useState([]);

    useEffect(() => {
        // Fetch workout plans from the Django backend
        fetch('http://localhost:8000/')
            .then(response => response.json())
            .then(data => setWorkoutPlans(data))
            .catch(error => console.error('Error fetching workout plans:', error));
    }, []);

    const handleGenerateWorkoutPlan = (e) => {
        e.preventDefault();

        fetch(`http://localhost:8000/?days=${selectedDays}&difficulty=${selectedDifficulty}`)
            .then(response => response.json())
            .then(data => {
                // Gets the reponse with the generated workout plans
                setGeneratedWorkoutPlan(data);
            })
            .catch(error => console.error('Error fetching generated workout plans:', error));
    };

    const tooltip = <Tooltip>Generate desired workout plan.</Tooltip>;

    return (
        <div style={{ backgroundColor: '#F3F3F3' }}>
            <NavBar />
            <main className='Container'>
                <div className="row justify-content-center gap-4 " style={{ padding: '40px' }}>
                    {/* --- Generate Workout Plan Card --- */}
                    <div className="card mb-4 col-lg-3 col-md-8 col-sm-8 col-8 align-items-center border border-3">
                        <div className="card-body">
                            <h3 className="card-title mb-3 fw-bold" style={{ marginTop: '20px', marginBottom: '20px'}}>Generate Workout Plan</h3>
                            <p> Configure workout requirements in order to generate a workout plan.</p>

                            <form onSubmit={handleGenerateWorkoutPlan}>

                                {/*--- Radio buttons for workout days ---*/}
                                <h6>Select days for workouts:</h6>
                                <input type="radio" required id="3" name="workoutDays" value="3" onChange={() => setSelectedDays(3)} />
                                <label htmlFor="3">3 days/week</label><br />
                                <input type="radio" required id="6" name="workoutDays" value="6" onChange={() => setSelectedDays(6)} />
                                <label htmlFor="6">6 days/week</label><br /><br />

                                {/*--- Radio buttons for workout difficulty ---*/}
                                <h6>Select level for workouts</h6>
                                <input type="radio" required id="Easy" name="workoutDifficulty" value="Easy" onChange={() => setSelectedDifficulty('Easy')} />
                                <label htmlFor="Easy">Easy</label><br />
                                <input type="radio" required id="Medium" name="workoutDifficulty" value="Medium" onChange={() => setSelectedDifficulty('Medium')} />
                                <label htmlFor="Medium">Medium</label><br />
                                <input type="radio" required id="Hard" name="workoutDifficulty" value="Hard" onChange={() => setSelectedDifficulty('Hard')} />
                                <label htmlFor="Hard">Hard</label><br /><br />

                                {/*--- Generate the workout from the given radio buttons ---*/}
                                <OverlayTrigger placement="bottom" overlay={tooltip}>
                                    <button className="btn btn-primary" type="submit">
                                        Generate
                                    </button>
                                </OverlayTrigger>
                            </form>
                        </div>
                    </div>
                    {/* --- Generate Workout Plan Card ---*/}
                    <div className="card mb-4 col-lg-8 col-md-8 col-sm-8 col-8 border border-3">
                        <div className="card-body">
                            <h3 className="card-title mb-3 fw-bold" style={{ marginTop: '20px'}}>
                                {generatedWorkoutPlan.length > 0 ? 'Generated Plans' : 'No generated plans'}
                            </h3>
                            <p>The following exercise amounts depend on the various goals that are wanted to be achieved.</p>
                            <ul>
                                <li><b>Hypertrophy</b> = 3 sets of 8 to 12 reps</li>
                                <li><b>Strength</b> = 5 sets of 5 reps</li>
                                <li><b>Endurance</b> = 3 sets of 15 to 20 reps</li>
                            </ul>
                        </div>
                        <div className="row row-cols-1 gap-4" style={{ padding: '15px' }}>
                            {generatedWorkoutPlan.map((generatedPlan) => (
                                <div key={generatedPlan.id} className="col">
                                    {/*--- Card containing the workouts ---*/}
                                    <div className="card h-100 shadow-sm border border-1" style={{ backgroundColor: '#FBFBFB' }}>
                                        <div className="card-header">
                                            <b>{generatedPlan.name}</b>
                                        </div>
                                        <div className="card-body d-flex flex-column">
                                            <div className="row row-cols-1 row-cols-md-3 g-4 flex-fill">
                                                {generatedPlan.exercises.map((exercise) => (
                                                    <div key={exercise.id} className="col mb-3">
                                                        <div className="card shadow-sm  h-100">
                                                            <div className="card-body d-flex flex-column">
                                                                <div className="mb-3">
                                                                    <h5 className="card-title mb-3">{exercise.name}</h5>
                                                                    <Badge variant="info" className="muscle-group-badge bg-dark">{exercise.muscle_group}</Badge>
                                                                    <p className="card-text mt-3">{exercise.description}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WorkoutPlan;