import { Header } from './componentes/Topo/header';
import { Icons } from './componentes/TechIcons/Icons';
import {Cards } from './componentes/Card/Cards'
import { Space } from './componentes/Decrição/space'
import './styles.css'

 function App() {

  return (
    <div>
      <div className='TOP'>
    <Header />
    
    <Icons />
    </div>
    
    <Cards/>  
    <Space />
   
    </div>
  );
}

export default App