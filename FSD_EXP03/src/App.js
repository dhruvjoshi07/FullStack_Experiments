import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [offline, setOffline] = useState(!navigator.onLine);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(() => console.log("Offline mode"));

    window.addEventListener("offline", () => setOffline(true));
    window.addEventListener("online", () => setOffline(false));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#ff9acb,#ffc6e3)",
        fontFamily: "Arial",
        padding: "40px",
        textAlign: "center"
      }}
    >
      <h1 style={{ color: "#fff", fontSize: "40px" }}>
        🌸 React Progressive Web App 🌸
      </h1>

      {offline && (
        <div
          style={{
            background: "#fff",
            color: "#d63384",
            padding: "10px",
            margin: "20px auto",
            width: "300px",
            borderRadius: "8px",
            fontWeight: "bold"
          }}
        >
          ⚠ Offline Mode Enabled
        </div>
      )}

      <h2 style={{ color: "#fff" }}>Latest Posts</h2>

      <div style={{ maxWidth: "700px", margin: "auto" }}>
        {posts.map(post => (
          <div
            key={post.id}
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "15px",
              margin: "15px 0",
              boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
              borderLeft: "6px solid #ff4da6"
            }}
          >
            <p style={{ fontSize: "18px", color: "#333" }}>{post.title}</p>
          </div>
        ))}
      </div>

      <button
        style={{
          marginTop: "30px",
          padding: "12px 25px",
          fontSize: "16px",
          background: "#ff4da6",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Install App
      </button>
    </div>
  );
}

export default App;