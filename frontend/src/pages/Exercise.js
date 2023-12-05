/*
import React, { useState } from 'react';
import NavBar from "../navigation/Navigation";

const Exercise = () => {
    // Create a list first to test if the UI will print out the correct style
    // Replace this stuff with my database after
    const exercises = [
        {
            id: 1,
            name: 'Exercise 1',
            description: 'Description for Exercise 1',
            muscleGroup: 'Muscle Group 1',
        },
        {
            id: 2,
            name: 'Exercise 2',
            description: 'Description for Exercise 2',
            muscleGroup: 'Muscle Group 2',
        },
        {
            id: 3,
            name: 'Exercise 3',
            description: 'Description for Exercise3',
            muscleGroup: 'Muscle Group 3',
        },
        {
            id: 4,
            name: 'Exercise 4',
            description: 'Description for Exercise4',
            muscleGroup: 'Muscle Group 4',
        },
    ];

    return (
        <div>
            <NavBar/>
        <main className='Container'>
            <div className="row justify-content-center gap-4 " style={{ padding: '40px'}}>
                <div className="card mb-4 col-lg-8 col-md-8 col-sm-8 col-8">
                    <div>
                        <h3 className="card-title mb-3 fw-bold" style={{ marginTop: '50px', marginLeft:'40px'}}>Exercise List</h3>
                    </div>
                    <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center" style={{ padding: '20px' }}>
                        {exercises.map((exercise) => (
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
                    </div>
                </div>
            </div>
        </main>
        </div>
    );
};

export default Exercise;*/

/*
import React, { useState, useEffect } from 'react';
import NavBar from "../navigation/Navigation";

const Exercise = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        // Use the fetch API or a library like axios to make a request to your Django backend
        // Replace the URL with the actual endpoint of your Django API
        fetch('http://localhost:8000/exercise_library/')
            .then(response => response.json())
            .then(data => setExercises(data))
            .catch(error => console.error('Error fetching exercises:', error));
    }, []); // The empty dependency array means this effect runs once after the initial render

    return (
        <div>
            <NavBar/>
            <main className='Container'>
                <div className="row justify-content-center gap-4 " style={{ padding: '40px'}}>
                    <div className="card mb-4 col-lg-8 col-md-8 col-sm-8 col-8">
                        <div>
                            <h3 className="card-title mb-3 fw-bold" style={{ marginTop: '50px', marginLeft:'40px'}}>Exercise List</h3>
                        </div>
                        <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center" style={{ padding: '20px' }}>
                            {exercises.map((exercise) => (
                                <div key={exercise.id} className="col-lg-3 col-md-8">
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <h3 className="card-title mb-3">{exercise.name}</h3>
                                            <badge className="badge rounded-pill bg-dark">{exercise.muscle_group}</badge>
                                            {/!*<span className="badge rounded-pill bg-dark">{exercise.muscle_group}</span>*!/}
                                            <p className="card-text mb-4">
                                                {exercise.description}
                                            </p>
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

export default Exercise;*/

import React, { useState, useEffect } from 'react';
import NavBar from "../navigation/Navigation";

const Exercise = () => {
    const [exercises, setExercises] = useState([]);
    const [selectedMuscleGroup, setSelectedMuscleGroup] = useState(null);

    useEffect(() => {
        const apiUrl = selectedMuscleGroup
            ? `http://localhost:8000/exercise_library/?muscle_group=${selectedMuscleGroup}`
            : 'http://localhost:8000/exercise_library/';

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setExercises(data))
            .catch(error => console.error('Error fetching exercises:', error));
    }, [selectedMuscleGroup]);

    const muscleGroups = ['All Exercises','Biceps', 'Triceps', 'Shoulders', 'Chest', 'Back', 'Quadriceps', 'Hamstring', 'Calf', 'Abs'];

    return (
        /*<div>
            <NavBar />
            <main className='Container'>
                <div className="row justify-content-center gap-4 " style={{ padding: '40px' }}>
                    <div className="card col-lg-3 col-md-8 col-sm-8 col-8 align-items-center">
                        <div className="list-group w-100">
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
                    <div className="card mb-4 col-lg-8 col-md-8 col-sm-8 col-8">
                        <div>
                            <h3 className="card-title mb-3 fw-bold" style={{ marginTop: '50px', marginLeft: '40px' }}>Exercise List</h3>
                        </div>
                        <div className="row row-cols-1 row-cols-md-3 g-4" style={{ padding: '20px' }}>
                            {exercises.map((exercise) => (
                                <div key={exercise.id} className="col-md-4">
                                    <div className="card h-100 mb-4">
                                        <div className="card-body">
                                            <h3 className="card-title mb-3">{exercise.name}</h3>
                                            <span className="badge rounded-pill bg-dark">{exercise.muscle_group}</span>
                                            <p className="card-text mb-4">
                                                {exercise.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>*/

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
                            <p>Below is a list for the selected exercises.</p>
                        </div>
                        <div className="row row-cols-1 row-cols-md-3 g-4" style={{ padding: '20px' }}>
                            {exercises.map((exercise) => (
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
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
};

export default Exercise;