const CurrentTime = () => {
  let time = new Date();
  return (
    <p className="lead myPara">
      This is the current time : {time.toLocaleDateString()}-
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
