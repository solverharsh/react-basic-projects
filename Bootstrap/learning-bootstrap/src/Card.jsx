function Card() {
  return (
    <div
      style={{
        "background-color": "#414141",
        border: "2px solid white",
        padding: "50px 50px",
      }}
    >
      <h4 style={{ "margin-bottom": "30px", color: "white" }}>Button-Type</h4>
      <div
        class="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" class="btn btn-danger">
          Left
        </button>
        <button type="button" class="btn btn-warning">
          Middle
        </button>
        <button type="button" class="btn btn-success">
          Right
        </button>
      </div>
    </div>
  );
}

export default Card;
