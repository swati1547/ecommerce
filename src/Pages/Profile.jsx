import React, { useEffect, useState } from "react";
import { getUser } from "../Service/UserService";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const data = await getUser();
      setUser(data);
    }
    fetchUser();
  }, []);
  if (!user) {
    return "User not Present...";
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Full Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Mobile Number</td>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <td>Email ID</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>not added</td>
          </tr>
          <tr>
            <td>Date of Birth</td>
            <td>not added</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>{user.address}</td>
          </tr>
          <tr>
            <td>Alternate Mobile</td>
            <td>not added</td>
          </tr>
          <tr>
            <td>Hint Name</td>
            <td>not added</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => navigate("/r")}>Edit</button>
    </div>
  );
}
