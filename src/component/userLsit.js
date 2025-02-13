import axios from "axios";
import { useState, useEffect } from "react";

export const Userist = () => {
    const [userData, setUserData] = useState([]);

    // Fetch user list on component mount
    useEffect(() => {
        userlist();
    }, []);

    const userlist = () => {
        axios.get("http://localhost:3000/user-list/")
            .then((res) => {
                console.log(res?.data);
                setUserData(res?.data);
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
                </tr>
            </thead>
            <tbody>
                {userData.length > 0 ? (
                    userData.map((ele) => (
                        <tr key={ele?._id}>
                            <td>{ele?.name}</td>
                            <td>{ele?.email}</td>
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
