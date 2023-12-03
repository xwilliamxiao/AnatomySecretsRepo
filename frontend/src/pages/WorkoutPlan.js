import React, { useState, useEffect } from 'react';
import NavBar from "../navigation/Navigation";

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

    return (
        <div>
            <NavBar />
            <main className='Container'>
                <div className="row justify-content-center gap-4 " style={{ padding: '40px' }}>
                    {/* --- Generate Workout Plan Card ---*/}
                    <div className="card mb-4 col-lg-3 col-md-8 col-sm-8 col-8 align-items-center">
                        <div className="card-body">
                            <h3 className="card-title mb-3 fw-bold" style={{ marginTop: '30px' }}>Generate Workout Plan</h3>
                            <form onSubmit={handleGenerateWorkoutPlan}>
                                {/*--- Radio buttons for workout days ---*/}
                                <h5>Select days for workouts:</h5>
                                <input type="radio" required id="3" name="workoutDays" value="3" onChange={() => setSelectedDays(3)} />
                                <label htmlFor="3">3 days/week</label><br />
                                <input type="radio" required id="6" name="workoutDays" value="6" onChange={() => setSelectedDays(6)} />
                                <label htmlFor="6">6 days/week</label><br /><br />

                                {/*--- Radio buttons for workout difficulty ---*/}
                                <h5>Select level for workouts</h5>
                                <input type="radio" required id="Easy" name="workoutDifficulty" value="Easy" onChange={() => setSelectedDifficulty('Easy')} />
                                <label htmlFor="Easy">Easy</label><br />
                                <input type="radio" required id="Medium" name="workoutDifficulty" value="Medium" onChange={() => setSelectedDifficulty('Medium')} />
                                <label htmlFor="Medium">Medium</label><br />
                                <input type="radio" required id="Hard" name="workoutDifficulty" value="Hard" onChange={() => setSelectedDifficulty('Hard')} />
                                <label htmlFor="Hard">Hard</label><br /><br />

                                {/*--- Generate the workout from the given radio buttons ---*/}
                                <button className="btn btn-primary" type="submit">
                                    Generate
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* --- Generate Workout Plan Card ---*/}
                    <div className="card mb-4 col-lg-8 col-md-8 col-sm-8 col-8">
                        <div>
                            <h3 className="card-title mb-3 fw-bold" style={{ marginTop: '50px', marginLeft: '40px' }}>
                                {generatedWorkoutPlan.length > 0 ? 'Generated Plans' : 'No generated plans'}
                            </h3>
                        </div>
                        <div className="d-flex flex-wrap gap-5 align-items-center justify-content-center" style={{ padding: '20px' }}>
                            {generatedWorkoutPlan.map((generatedPlan) => (
                                <div key={generatedPlan.id} className="col-lg-3 col-md-8">
                                    <div className="card mb-4">
                                        <div className="card-body">

                                            <h3 className="card-title mb-3">{generatedPlan.name}</h3>

                                            {/* --- Exercises within the workout card --- */}
                                            {generatedPlan.exercises.map((exercise) => (
                                                <div key={exercise.id}>
                                                    <hr style={{ margin: '10px 0', borderColor: 'gray' }} />
                                                    <h5>{exercise.name}</h5>
                                                    <span className="badge rounded-pill bg-dark">{exercise.muscle_group}</span>
                                                    <p>Description: {exercise.description}</p>
                                                </div>
                                            ))}
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