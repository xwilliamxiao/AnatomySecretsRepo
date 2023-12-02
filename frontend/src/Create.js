import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <main className='Container'>
                <div>
                    <Header />
                    {/* Add the rest of your application content here */}
                </div>
                <div className="row justify-content-center gap-4 " style={{ padding: '40px'}}>
                    <div className="card mb-4 col-lg-3 col-md-8 col-sm-8 col-8 align-items-center">
                        <div className="card-body">
                            <h3 className="card-title mb-3 fw-bold" style={{ marginTop: '30px'}}>Create Workout Plan</h3>
                            <form>
                                <h5>Select days for workouts:</h5>

                                <input className="form-check-input" type="radio" id="3" name="workoutDays" value="3" required />
                                <label className="form-check-label" htmlFor="3">
                                    3 days/week
                                </label><br/>

                                <input className="form-check-input" type="radio" id="6" name="workoutDays" value="6" required />
                                <label className="form-check-label" htmlFor="6">
                                    6 days/week
                                </label><br/><br/>

                                <h5>Select level for workouts</h5>

                                <input className="form-check-input" type="radio" id="Easy" name="workoutDifficulty" value="Easy" required />
                                <label className="form-check-label" htmlFor="Easy">
                                    Easy
                                </label><br/>

                                <input className="form-check-input" type="radio" id="Medium" name="workoutDifficulty" value="Medium" required />
                                <label className="form-check-label" htmlFor="Medium">
                                    Medium
                                </label><br/>

                                <input className="form-check-input" type="radio" id="Hard" name="workoutDifficulty" value="Hard" required />
                                <label className="form-check-label" htmlFor="Hard">
                                    Hard
                                </label><br/><br/>

                                <input className="btn btn-primary" type="submit" name="search" value="Generate" />
                            </form>
                        </div>
                    </div>
                    <div className="card mb-4 col-lg-8 col-md-8 col-sm-8 col-8">
                        <div>
                            <h3 className="card-title mb-3 fw-bold" style={{ marginTop: '50px', marginLeft:'40px'}}>The Workout Plan Name</h3>
                        </div>
                        <div className="d-flex flex-wrap gap-5 align-items-center justify-content-center" style={{ padding: '20px' }}>
                            <div className="col-lg-3 col-md-8">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h3 className="card-title mb-3">Card Title</h3>
                                        <badge className="badge rounded-pill bg-dark">Biceps</badge>
                                        <p className="card-text mb-4">
                                            Workout contains this many exercises
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-8">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <button className="btn btn-primary" onClick={() => this.addItem()}>Add item</button>
                                        <ul className="list-group list-group-flush border-top-0">
                                            {this.renderItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-8">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <button className="btn btn-primary" onClick={() => this.addItem()}>Add item</button>
                                        <ul className="list-group list-group-flush border-top-0">
                                            {this.renderItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-8">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <button className="btn btn-primary" onClick={() => this.addItem()}>Add item</button>
                                        <ul className="list-group list-group-flush border-top-0">
                                            {this.renderItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Header;