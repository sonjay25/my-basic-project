type Point = {x: number; y: number, item: number[]
};
type T = keyof Point

function Practice() {
  const obj: Point = {
    x: 23,
    y: 34,
    item: [1, 2, 4, 5, 5]
  };

  const ops = obj.item.map(value => value);

  console.log(ops);

  return (
    <div>Practice</div>
  )
}

export default Practice