import React,{useState,useMemo} from 'react'
const App=()=>{
  const[number,setNumber]=useState(1)
  const Factorila=useMemo(()=>fact(number),[number])

  return(
    <div style={{marginTop:'10%'}}>
      <h1>useMemo Example</h1>
    <input value={number} onChange={(e) =>
        setNumber(e.target.value)}
      />
    {Factorila}
    </div>
  )
}
 const fact=(n)=>{
  let answer=1
  for(var i=n;i>=1;i--){
  answer=answer*i;
  }
  console.log('factorial')
  return answer;
} 
export default App;  