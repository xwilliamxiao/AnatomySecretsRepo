import React, { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import NavBar from "../navigation/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import { OverlayTrigger, Tooltip, Toast } from 'react-bootstrap';


const CreateWorkout = () => {
    const [exercise_name, setExerciseName] = useState('');
    const [exercise_description, setExerciseDescription] = useState('');
    const [muscle_group, setMuscleGroup] = useState('');
    const [workoutCards, setWorkoutCards] = useState([]);
    const [showToast, setShowToast] = useState(false);

    // Gets the existing data from our database
    useEffect(() => {
        fetch('http://localhost:8000/create/')
            .then(response => response.json())
            .then(data => setWorkoutCards(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Alert user if fields are not all inputted
        if (!exercise_name || !exercise_description || !muscle_group) {
            alert('Complete all required fields to create exercise.');
            return;
        }

        const newUserExercise = {
            exercise_name,
            exercise_description,
            muscle_group,
        };

        // Update the state with the new card
        setWorkoutCards([...workoutCards, newUserExercise]);

        // Clear the input fields whenever the inputs are sent
        setExerciseName('');
        setExerciseDescription('');
        setMuscleGroup('');

        // POST request to save data
        fetch('http://localhost:8000/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUserExercise),
        })
            .then(response => response.json())
            .then(data => {
                console.log('User-created exercise saved:', data);
                setShowToast(true);
            })
            .catch(error => console.error('Error saving user-created exercise:', error));
    };

    // Tooltip for hovering effect over button
    const tooltip = <Tooltip>Add exersises for the community.</Tooltip>;

    return (
        <div style={{ backgroundColor: '#F3F3F3' }}>
            <NavBar/>
        <main className='Container'>
            <div className="row justify-content-center gap-4" style={{ padding: '40px' }}>
                {/* --- Create Exercise Card --- */}
                <div className="card mb-4 col-lg-3 col-md-8 col-sm-8 col-8 align-items-center border border-3 ">
                    <div className="card-body">
                        <h3 className="card-title mb-3 fw-bold" style={{ marginTop: '20px' }}>Add Exercises</h3>
                        <p>Complete the following criteria below to add exercises into the community.</p>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exercise_name" className="form-label">Exercise Name:</label>
                                <input
                                    type="text"
                                    id="exercise_name"
                                    className="form-control"
                                    value={exercise_name}
                                    onChange={(e) => setExerciseName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exercise_description" className="form-label">Exercise Description:</label>
                                <input
                                    type="text"
                                    id="exercise_description"
                                    className="form-control"
                                    value={exercise_description}
                                    onChange={(e) => setExerciseDescription(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="muscle_group" className="form-label">Muscle Group:</label>
                                <select
                                    id="muscle_group"
                                    className="form-control"
                                    value={muscle_group}
                                    onChange={(e) => setMuscleGroup(e.target.value)}
                                >
                                    <option value="Biceps">Biceps</option>
                                    <option value="Triceps">Triceps</option>
                                    <option value="Shoulders">Shoulders</option>
                                    <option value="Chest">Chest</option>
                                    <option value="Back">Back</option>
                                    <option value="Quadriceps">Quadriceps</option>
                                    <option value="Hamstring">Hamstring</option>
                                    <option value="Calf">Calf</option>
                                    <option value="Abs">Abs</option>
                                </select>
                            </div>
                            <OverlayTrigger placement="bottom" overlay={tooltip}>
                            <button type="submit" className="btn btn-primary" style={{ marginTop: '20px', marginBottom: '20px'}}>Generate</button>
                            </OverlayTrigger>
                        </form>
                    </div>
                </div>

                {/*--- Display generated workout cards ---*/}
                <div className="card mb-4 col-lg-8 col-md-8 col-sm-8 col-8 border border-3" >
                    <div className="card-body">
                        <h3 className="card-title mb-3 fw-bold" style={{ marginTop: '20px' }}>Community Exercises</h3>
                        <p>Below is a list of exercises that were created by our community.</p>
                    </div>
                    {/*--- Exercise Cards ---*/}
                    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-4" style={{ padding: '20px' }}>
                        {workoutCards.map((card) => (
                            <div key={card.id} className="col mb-4">
                                <div className="card h-100 shadow-sm border border-1">
                                    <div className="card-body">
                                        <h5 className="card-title mb-3">{card.exercise_name}</h5>
                                        <Badge variant="info" className="muscle-group-badge bg-dark">{card.muscle_group}</Badge>
                                        <p className="card-text mt-3">{card.exercise_description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/*--- Toast for when workout is added ---*/}
                <div className="position-fixed bottom-0 start-50 translate-middle-x p-3" style={{ zIndex: 11 }}>
                    <Toast show={showToast} onClose={() => setShowToast(false)} delay={5000} autohide className={"text-white bg-success"}>
                        <Toast.Body>
                            Exercise created successfully!
                        </Toast.Body>
                    </Toast>
                </div>
            </div>
        </main>
        </div>
    );
};

export default CreateWorkout;