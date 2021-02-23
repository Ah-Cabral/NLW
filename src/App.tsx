import { Button } from './components/Button'

//Componentes São formas de conseguirmos isolar um pedaço de código
//à fim de deixar o código mais legível. 
//Também é uma forma reaproveitar partes de código.
function App() {
  return (
    
    //No react não podem-se ter
    //diversos elementos juntos, se esses não estiverem dentro de outro.
    //Nesse caso, os buttons estão dentro de uma div.

    <div>
      <Button color = 'red'/>
      <Button color = 'blue'/>
      <Button color = 'green'/>
    </div>
    
  );
}

export default App;
