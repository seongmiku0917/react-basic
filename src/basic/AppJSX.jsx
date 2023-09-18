import "./App.css";

function AppJSX() {
  const name = "miku";
  const list = ["우유", "딸기", "바나나", "요거트"];

  return (
    <>
      <h1 className="orange">{`Hello ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
