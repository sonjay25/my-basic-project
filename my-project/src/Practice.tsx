type Point = {x: number; y: number, item?: number[]
};


function Practice() {
  function myf<T, U extends keyof T>(age: T, add: U) {
    return age[add];
  }

const par: Point = {x: 23, y: 34};

console.log(myf(par, 'x'))

  return (
    <>
     <div className="container mx-auto">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam enim neque deserunt recusandae amet quam inventore officia dolores, minima aut!</p>
     </div>
    </>
  )
}

export default Practice
