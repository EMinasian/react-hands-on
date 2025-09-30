export default function PropChangeChild({ value }) {
  console.log("The child with prop change rendered!");

  return <div>{`The prop value is: ${value}`}</div>;
}
