"use client";

export default function JoinForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}
    >
      <input
        type="email"
        required
        placeholder="you@school.edu"
        className="input"
        style={{ width: 260, background: "#1B1D29", borderColor: "#2C2E3D", color: "#fff" }}
      />
      <button type="submit" className="btn-primary">
        Join the club
      </button>
    </form>
  );
}
