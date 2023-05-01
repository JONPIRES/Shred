import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as usersAPI from "../../utilities/users-api"

function UpdateUser({ user }) {
    const { id } = useParams();

    const [updateUser, setUpdateUser] = useState({
        name: "",
        email: "",
        password: "",
        id: user._id,
    })

    const [error, setError] = useState("");

    function handleChange(e) {
        setUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
        setError("")
    }

    async function fetchUsers() {
        const currentUser = await usersAPI.update(updateUser)
        setUpdateUser(currentUser)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();
        // window.location.replace("/")

        try {
            await usersAPI.update(updateUser)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="UpdateUser container">
            <h1 className="text-center mt-5"> Edit <span className="text-info">{user.name}</span></h1>
            <div className="container mt-5" style={{ minHeight: "100vh", height: "auto" }}>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label className="form-label">Username: </label>
                    <input
                        type="text"
                        name="name"
                        value={updateUser.name}
                        onChange={handleChange}
                        className="form-control"
                    />

                    <label className="form-label">E-mail: </label>
                    <input
                        type="text"
                        name="email"
                        value={updateUser.email}
                        onChange={handleChange}
                        className="form-control" />
                    <div className="text-center"><button className="btn btn-primary text-center mt-5">Update</button></div>
                    


                </form>

            </div>
        </div>
    )
}

export default UpdateUser;