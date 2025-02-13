import axios from "axios";
import { useState, useEffect } from "react";

export const List = () => {
    const [userData, setUserData] = useState([]);

    // Fetch user list on component mount
    useEffect(() => {
        userlist();
    }, []);

    const userlist = () => {
        axios.get("http://localhost:3000/list/")
            .then((res) => {
                console.log(res?.data);
                setUserData(res?.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleCancel = (id) => {
        axios.delete(`http://localhost:3000/${id}`)
            .then(() => {
                userlist()
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {userData.length > 0 ? (
                    userData.map((ele) => (
                        <tr key={ele?._id}>
                            <td>{ele?.name}</td>
                            <td>{ele?.email}</td>
                            <td>{ele?.address}</td>
                            <td>{new Date(ele?.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                            })}</td>
                            <td>
                                <button onClick={() => handleCancel(ele?._id)}>Cancel</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5" style={{ textAlign: "center" }}>No Users Found</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};
