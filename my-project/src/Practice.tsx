interface Person {
  fname: string;
  age: number;
}

function Practice() {
  const obj: Person = {
    fname: 'j',
    age: 23
  };

  console.log(obj["fname"]);
  return (
    <div>Practice</div>
  )
}

export default Practice