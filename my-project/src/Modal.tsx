interface Items<P, T, U> {
  id: P;
  fname: T;
  age: U;
}
function Modal() {
  const arrObject: Items<number, string, number>[] = [
    {
      id: 1001,
      fname: "jayson",
      age: 28,
    },
    {
      id: 1002,
      fname: "jordan",
      age: 32,
    },
  ];
  function myf<T, U>(a: T, b: U): string {
    return `ako ay si ${a} ang edad ko ay ${b}`;
  }
  console.log(myf<string, number>("jayson", 28));
  return (
    <>
      <div className="container mx-auto">
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>first name</th>
                <th>age</th>
              </tr>
            </thead>
            <tbody>
              {arrObject.map((value) => {
                return (
                  <tr key={value.id}>
                    <td>{value.id}</td>
                    <td>{value.fname}</td>
                    <td>{value.age}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="container">
          <p className="text-green-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, rerum.
            Voluptas, eveniet quos temporibus laborum accusantium facilis unde
            pariatur amet.
          </p>
        </div>
        <div className="container mx-auto"></div>
        <div className="container"></div>
      </div>
    </>
  );
}

export default Modal;
