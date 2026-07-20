import Img1 from './assets/img/f6da0669f2a15babaef6f0db442cc1f2.png'
import Event  from './Event';
function App() {
  const name = "Mina"
  const color = {
    color:'red',
    fontsize: '50px'
  };
  return (

    <>
     <div>
      <img src={Img1} alt="" style={{ borderRadius:"20px", width:"200px"}} />
      <h1>Hello <span style={color}>{name}</span>  from React!</h1>
      <p>New tittle</p>

      <div>
         <Event/>
      </div>

     </div>

    </>
  )
}



export default App
