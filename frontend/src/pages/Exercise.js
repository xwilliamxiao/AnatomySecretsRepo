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

export default Exercise;