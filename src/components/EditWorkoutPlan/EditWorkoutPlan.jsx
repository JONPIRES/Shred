import React from "react";

async function handleSubmit(e) {
    e.prevent.default()
}



function EditWorkoutPlan() {
    return (
        <div className="edit-workout-plan" style={{ minHeight: '100vh', height: 'auto' }}>
            <div className="container container-fluid">
                <h1 className="mt-3 text-center">Edit Workout Plan</h1>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label className="form-label">Name:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                    <label className="form-label">Goals:</label>
                    <input
                        type="text"
                        name="muscleGroup"
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                    <label className="form-label">Cycle:</label>
                    <input
                        type="number"
                        name="equipment"
                        onChange={handleChange}
                        required
                        className="form-control"
                    />


                    <label className="form-label">Exercise:</label>
                    <input
                        type="text"
                        name="explanation"
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                    <button type="submit" className="btn btn-dark mt-2">Create Workout Plan </button>
                </form>
                <p className="error-message ">&nbsp;{error}</p>
            </div>
        </div>

    )
}

export default EditWorkoutPlan;