// import logo from './logo.svg';
// import './App.css';
import { startTransition, useEffect, useState } from 'react';

function App(){
  const [ count, setCount ] = useState(0);
  const bgcolor = ["red",'green','blue','pink'];

  //body태그의 배경색

  useEffect(()=>{
  document.body.style.backgroundColor = bgcolor[count];
  },[count])

  return (
    <>
    <div className="App">
      <button onClick={()=>{
        setCount(count + 1) ; //대입식 절대불가 / 연산식만
      }}>{count} 증가해줘 </button>
        
        <button onClick={()=>{
            setCount(count > 0 ? count - 1 : bgcolor.length -1 );
          }}> {count} 감소해줘 </button>
      </div>
      <div>
          {/* {<button>1</button> <button>2</button> <button>3</button>} */}
          { //this의 여부에 따라서 결정
            bgcolor.map((v , i)=>{
              return(
                <button onClick={()=>{ setCount(i) }}>{v}</button>
              )
            })
          }
      </div>  
    </>
);
}

export default App;

