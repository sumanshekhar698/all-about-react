const Spinner = () => {
  return (
    <div
      className="body"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "400px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "5px solid #f3f3f3",
            borderTop: "5px solid #ff2900",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>
        <p style={{ color: "#666", fontSize: "16px", fontWeight: "500" }}>
          Loading restaurants...
        </p>
      </div>
      <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
    </div>
  );
};

export default Spinner;
