
interface Person<T,U, V> {
  fname: T
  age: U
  add?: V;
  function?: () => string;
};
type Arr<T> = T[];
type Str<T, U> = {fname: T, age: U} | {add: T, user: U};


function Practice() {
 



 const dre = async () => {
    try {
      let res = await fetch('gwapo/ko');
    let result = await res.json();
    console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  setTimeout(() => {
    dre()
  }, 4000);
  





  
  
 

  return (
    <>

    </>
  )
}

export default Practice