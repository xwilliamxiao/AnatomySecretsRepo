import React, { useState, useEffect } from 'react';
import NavBar from "../navigation/Navigation";

const Exercise = () => {
    const [exercises, setExercises] = useState([]);
    const [selectedMuscleGroup, setSelectedMuscleGroup] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const apiUrl = selectedMuscleGroup
            ? `http://localhost:8000/exercise_library/?muscle_group=${selectedMuscleGroup}`
            : 'http://localhost:8000/exercise_library/';

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setExercises(data))
            .catch(error => console.error('Error fetching exercises:', error));
    }, [selectedMuscleGroup]);

    const muscleGroups = ['All Exercises', 'Biceps', 'Triceps', 'Shoulders', 'Chest', 'Back', 'Quadriceps', 'Hamstring', 'Calf', 'Abs'];

    // Filter exercises based on search term
    const filteredExercises = exercises.filter(exercise =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ backgroundColor: '#F3F3F3' }}>
            <NavBar />
            <main className='Container'>
                <div className="row justify-content-center gap-4 " style={{ padding: '40px' }}>
                    {/* List Group */}
                    <div className="col-lg-3 col-md-8 col-sm-8 col-8 align-items-center">
                        <div className="list-group w-100 border border-3">
                            {muscleGroups.map((group, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`list-group-item list-group-item-action ${group === selectedMuscleGroup || (group === 'All Exercises' && selectedMuscleGroup === null) ? 'active' : ''}`}
                                    onClick={() => setSelectedMuscleGroup(group === 'All Exercises' ? null : group)}
                                >
                                    {group}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Exercise Cards */}
                    <div className="card mb-4 col-lg-8 col-md-8 col-sm-8 col-8 border border-3">
                        <div className="card-body">
                            <h3 className="card-title mb-3 fw-bold" style={{ marginTop: '20px', marginBottom: '20px'}}>Exercise List</h3>
                            <p>View list of exercises.</p>
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Search exercises"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />

                        </div>
                        <div className="row row-cols-1 row-cols-md-3 g-4" style={{ padding: '20px' }}>
                            {filteredExercises.length > 0 ? (
                                filteredExercises.map((exercise) => (
                                    <div key={exercise.id} className="col-md-4">
                                        <div className="card h-100 shadow-sm mb-4">
                                            <div className="card-body">
                                                <h5 className="card-title mb-3">{exercise.name}</h5>
                                                <span className="badge rounded-pill bg-dark">{exercise.muscle_group}</span>
                                                <p className="card-text mt-3">
                                                    {exercise.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No exercises found</p>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Exercise;