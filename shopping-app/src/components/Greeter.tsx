import React from 'react';
// to get read of longer lines in the props we can use interface and late deconstruct it from props to the property names
interface GreeterProps {
  person: string;
}

// this is regular function

function Greeter({ person }: GreeterProps): JSX.Element {
  return <h1>Hello, {person.toUpperCase()}!</h1>;
}

// this is function component/ more specific should be a function
// const Greeter: React.FC = () => {
//   return <h1>Hello</h1>;
// };

export default Greeter;
