import React from 'react'; 
import {GlobalStyle} from './Components/Hooks/Style/GlobalStyle'
import {NavBar} from './Components/Hooks/NavBar/NavBar';
import {Menu} from './Components/Hooks/Menu/Menu';
import {ModalItem} from './Components/Hooks/Modal/ModalItem';
import {Order} from './Components/Hooks/Order/Order';
import {useOpenItem} from './Components/Hooks/useOpenItem';
import {useOrders} from './Components/Hooks/useOrders';

function App() {
  const openItem = useOpenItem();
 const orders = useOrders();
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders} {...openItem}/>
      <Menu {...openItem}/>
      {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
    
    
  );
}

export default App;
