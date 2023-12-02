import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import NavBar from "../navigation/Navigation";


const CreateWorkout = () => {
    const [exerciseName, setExerciseName] = useState('');
    const [exerciseDescription, setExerciseDescription] = useState('');
    const [muscleGroup, setMuscleGroup] = useState('');
    const [workoutCards, setWorkoutCards] = useState([]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (!exerciseName || !exerciseDescription || !muscleGroup) {
            alert('Please fill in all fields.');
            return;
        }

        // Create a new workout card
        const newCard = {
            id: workoutCards.length + 1,
            exerciseName,
            exerciseDescription,
            muscleGroup,
        };

        // Update the state with the new card
        setWorkoutCards([...workoutCards, newCard]);

        // Clear the input fields
        setExerciseName('');
        setExerciseDescription('');
        setMuscleGroup('');
    };

    return (
        <div>
            <NavBar/>
        <main className='Container'>
            <div className="row justify-content-center gap-4" style={{ padding: '40px' }}>
                {/* Create Exercise Card */}
                <div className="card mb-4 col-lg-3 col-md-8 col-sm-8 col-8 align-items-center">
                    <div className="card-body">
                        <h3 className="card-title mb-3 fw-bold" style={{ marginTop: '30px' }}>Generate Workout Plans</h3>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exerciseName" className="form-label">Exercise Name:</label>
                                <input
                                    type="text"
                                    id="exerciseName"
                                    className="form-control"
                                    value={exerciseName}
                                    onChange={(e) => setExerciseName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exerciseDescription" className="form-label">Exercise Description:</label>
                                <input
                                    type="text"
                                    id="exerciseDescription"
                                    className="form-control"
                                    value={exerciseDescription}
                                    onChange={(e) => setExerciseDescription(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="muscleGroup" className="form-label">Muscle Group:</label>
                                <input
                                    type="text"
                                    id="muscleGroup"
                                    className="form-control"
                                    value={muscleGroup}
                                    onChange={(e) => setMuscleGroup(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Create Workout Card</button>
                        </form>
                    </div>
                </div>

                {/* Display generated workout cards */}
                <div className="card mb-4 col-lg-8 col-md-8 col-sm-8 col-8">
                    <div>
                        <h3 className="card-title mb-3 fw-bold" style={{ marginTop: '50px', marginLeft: '40px' }}>The Workout Plan Name</h3>
                    </div>
                    <div className="d-flex flex-wrap gap-5 align-items-center justify-content-center" style={{ padding: '20px' }}>
                        {workoutCards.map((card) => (
                            <div key={card.id} className="col-lg-3 col-md-8 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title mb-3">{card.exerciseName}</h3>
                                        <Badge variant="info" className="muscle-group-badge bg-dark">Muscle Group: {card.muscleGroup}</Badge>
                                        <p className="card-text mt-3">{card.exerciseDescription}</p>
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

export default CreateWorkout;