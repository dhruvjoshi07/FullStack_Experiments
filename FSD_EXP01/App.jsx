import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "./redux/usersSlice";

function App() {
  const [username, setUsername] = useState("");
  const users = useSelector(state => state.users.list);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    dispatch(addUser(username));
    setUsername("");
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="container">
      <h1>Login Page</h1>

      {/* Login Form */}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Add Username</button>
      </form>

      {/* List of usernames */}
      {users.length > 0 && (
        <>
          <h2>Users List</h2>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.name}
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;