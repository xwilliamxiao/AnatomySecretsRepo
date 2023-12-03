import React, { useState } from 'react';
import NavBar from "../navigation/Navigation";

const WorkoutPlan = () => {
    // Sample data for workout plans and exercises
    const workoutPlans = [
        {
            id: 1,
            name: 'Workout Plan 1',
            exercises: [
                { id: 1, name: 'Exercise 1', description: 'Description for Exercise 1', muscleGroup: 'Muscle Group 1' },
                { id: 2, name: 'Exercise 2', description: 'Description for Exercise 2', muscleGroup: 'Muscle Group 2' },
                { id: 3, name: 'Exercise 3', description: 'Description for Exercise 3', muscleGroup: 'Muscle Group 3' },
            ],
        },
        {
            id: 2,
            name: 'Workout Plan 2',
            exercises: [
            ],
        },
    ];

    const [selectedDays, setSelectedDays] = useState(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const [generatedWorkoutPlan, setGeneratedWorkoutPlan] = useState(null);

    const handleGenerateWorkoutPlan = (e) => {
        e.preventDefault();

        const generatedPlan = {
            name: 'Generated Plan',
            exercises: [
                { id: 1, name: 'Exercise A', description: 'Description for Exercise A', muscleGroup: 'Muscle Group A' },
                { id: 2, name: 'Exercise B', description: 'Description for Exercise B', muscleGroup: 'Muscle Group B' },
                { id: 3, name: 'Exercise C', description: 'Description for Exercise C', muscleGroup: 'Muscle Group C' },
                { id: 4, name: 'Exercise D', description: 'Description for Exercise D', muscleGroup: 'Muscle Group D' },
            ],
        };

        // Update the state with the generated workout plan
        setGeneratedWorkoutPlan(generatedPlan);
    };

    return (
        <div>
            <NavBar/>
        <main className='Container'>
            <div className="row justify-content-center gap-4 " style={{ padding: '40px'}}>
                {/* --- Generate Workout Plan Card ---*/}
                <div className="card mb-4 col-lg-3 col-md-8 col-sm-8 col-8 align-items-center">
                    <div className="card-body">
                        <h3 className="card-title mb-3 fw-bold" style={{ marginTop: '30px'}}>Generate Workout Plan</h3>
                        <form onSubmit={handleGenerateWorkoutPlan}>
                            <h5>Select days for workouts:</h5>
                            <input type="radio" required id="3" name="workoutDays" value="3" onChange={() => setSelectedDays(3)} />
                            <label htmlFor="3">3 days/week</label><br/>
                            <input type="radio" required id="6" name="workoutDays" value="6" onChange={() => setSelectedDays(6)} />
                            <label htmlFor="6">6 days/week</label><br/><br/>

                            <h5>Select level for workouts</h5>
                            <input type="radio" required id="Easy" name="workoutDifficulty" value="Easy" onChange={() => setSelectedDifficulty('Easy')} />
                            <label htmlFor="Easy">Easy</label><br/>
                            <input type="radio" required id="Medium" name="workoutDifficulty" value="Medium" onChange={() => setSelectedDifficulty('Medium')} />
                            <label htmlFor="Medium">Medium</label><br/>
                            <input type="radio" required id="Hard" name="workoutDifficulty" value="Hard" onChange={() => setSelectedDifficulty('Hard')} />
                            <label htmlFor="Hard">Hard</label><br/><br/>

                            <button className="btn btn-primary" type="submit" data-toggle="tooltip" data-placement="top" title="Generate workout plan with the given parameters" >Generate</button>
                        </form>
                    </div>
                </div>

                {/* --- Display Generated Workout Plan ---*/}
                <div className="card mb-4 col-lg-8 col-md-8 col-sm-8 col-8">
                    <div>
                        <h3 className="card-title mb-3 fw-bold" style={{ marginTop: '50px', marginLeft: '40px' }}>
                            {generatedWorkoutPlan ? <span>Generated Plan: {generatedWorkoutPlan.name}</span> : 'Generated Plan'}
                        </h3>
                    </div>
                    <div className="d-flex flex-wrap gap-5 align-items-center justify-content-center" style={{ padding: '20px' }}>
                        {generatedWorkoutPlan ? (
                            <>
                                {/* Display exercises in sub-cards */}
                                {generatedWorkoutPlan.exercises.map((exercise) => (
                                    <div key={exercise.id} className="col-lg-3 col-md-8">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <h3 className="card-title mb-3">{exercise.name}</h3>
                                                <badge className="badge rounded-pill bg-dark">{exercise.muscleGroup}</badge>
                                                <p className="card-text mb-4">
                                                    {exercise.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <p>Select a workout plan.</p>
                        )}
                    </div>
                </div>
            </div>
        </main>
        </div>
    );
};

export default WorkoutPlan;