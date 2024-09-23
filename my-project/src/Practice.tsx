type P = (x: number) => number;
type Q = {fname: string, age: number, item?: number[]};
function Practice() {
  function myf(a: number[]) {
    return a.filter(fil => fil >= 5).map(value => value * 2);
  }
  const t = [1, 3, 5, 5, 68];
  console.log(myf(t))
  return (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio earum ut facilis necessitatibus laborum, recusandae repellendus ab. Error, numquam aliquid.</p>
   </div>
  )
}

export default Practice