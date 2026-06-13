function Header() {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <header
      className="app-header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h1>Task Manager</h1>

      <button
        onClick={handleLogout}
        style={{
          padding: "8px 16px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          background: "#ef4444",
          color: "white"
        }}
      >
        Logout
      </button>
    </header>
  );
}

export default Header;