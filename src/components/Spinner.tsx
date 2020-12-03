import spinner from "../assets/spinner.gif";

export default function Spinner() {
  return (
    <img
      src={spinner}
      height={30}
      style={{ margin: "30px" }}
      alt="loading..."
    />
  );
}
