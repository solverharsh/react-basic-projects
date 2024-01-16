function Hello() {
  let myName = "Virat's";
  const fullName = () => {
    return "Virat Kohli";
  };

  return (
    <p>
      {myName} fullname is {fullName()}.
    </p>
  );
}

export default Hello;
