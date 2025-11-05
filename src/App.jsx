import { useState } from "react";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [snacks, setSnacks] = useState("");
  const [total, setTotal] = useState(null);
  const [remaining, setRemaining] = useState(null);

  const calculateCalories = () => {
    if (!name || !goal || !breakfast || !lunch || !dinner || !snacks) {
      alert("⚠️ Please fill in all fields before calculating!");
      return;
    }

    const values = [goal, breakfast, lunch, dinner, snacks].map(Number);
    if (values.some((v) => v < 0 || isNaN(v))) {
      alert("❌ Calorie values must be positive numbers!");
      return;
    }

    const totalCalories = values.slice(1).reduce((a, b) => a + b, 0);
    const remainingCalories = values[0] - totalCalories;

    setTotal(totalCalories);
    setRemaining(remainingCalories);
  };

  const resetForm = () => {
    setName("");
    setGoal("");
    setBreakfast("");
    setLunch("");
    setDinner("");
    setSnacks("");
    setTotal(null);
    setRemaining(null);
  };

  return (
    <div className="app-container">
      <h1 className="title">🍎 Calorie Tracker App</h1>

      <div className="form-card">
        <div className="input-grid">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </label>

          <label>
            Daily Calorie Goal:
            <input
              type="number"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="e.g. 2000"
            />
          </label>

          <label>
            Breakfast Calories:
            <input
              type="number"
              value={breakfast}
              onChange={(e) => setBreakfast(e.target.value)}
              placeholder="e.g. 400"
            />
          </label>

          <label>
            Lunch Calories:
            <input
              type="number"
              value={lunch}
              onChange={(e) => setLunch(e.target.value)}
              placeholder="e.g. 600"
            />
          </label>

          <label>
            Dinner Calories:
            <input
              type="number"
              value={dinner}
              onChange={(e) => setDinner(e.target.value)}
              placeholder="e.g. 700"
            />
          </label>

          <label>
            Snacks Calories:
            <input
              type="number"
              value={snacks}
              onChange={(e) => setSnacks(e.target.value)}
              placeholder="e.g. 150"
            />
          </label>
        </div>

        <div className="button-row">
          <button className="calculate-btn" onClick={calculateCalories}>
            Calculate Calories
          </button>
          <button className="reset-btn" onClick={resetForm}>
            Reset
          </button>
        </div>

        {total !== null && (
          <div className="results">
            <h2>Results for {name}</h2>
            <p>
              <strong>Daily Goal:</strong> {goal} kcal
            </p>
            <p>
              <strong>Total Consumed:</strong> {total} kcal
            </p>
            <p
              className={
                remaining < 0 ? "warning-text" : "success-text"
              }
            >
              <strong>Remaining Calories:</strong>{" "}
              {remaining < 0
                ? `Exceeded by ${Math.abs(remaining)} kcal 😬`
                : `Within goal! ${remaining} kcal remaining ✅`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
