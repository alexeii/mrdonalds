import React from 'react'; 
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import {GlobalStyle} from './Components/Hooks/Style/GlobalStyle'
import {NavBar} from './Components/Hooks/NavBar/NavBar';
import {Menu} from './Components/Hooks/Menu/Menu';
import {ModalItem} from './Components/Hooks/Modal/ModalItem';
import {Order} from './Components/Hooks/Order/Order';
import {useOpenItem} from './Components/Hooks/useOpenItem';
import {useOrders} from './Components/Hooks/useOrders';
import {useAuth} from './Components/Hooks/useAuth';
import {useTitle} from './Components/Hooks/useTitle';
import {OrderConfirm} from './Components/Hooks/Order/OrderConfirm';
import {useOrderConfirm} from './Components/Hooks/useOrderConfirm';
import {Context} from './Components/Functions/context';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTNHyd0QkLcdGacsDddBhmwjMtDwcvmjg",
  authDomain: "mrdonalds-cd4e7.firebaseapp.com",
  databaseURL: "https://mrdonalds-cd4e7.firebaseio.com",
  projectId: "mrdonalds-cd4e7",
  storageBucket: "mrdonalds-cd4e7.appspot.com",
  messagingSenderId: "307249361728",
  appId: "1:307249361728:web:894dc65d8f7e55d84680a5",
  measurementId: "G-LKGEK3HJHK"
};

firebase.initializeApp(firebaseConfig);


function App() {

  const firebaseDatabase = firebase.database;
  const auth = useAuth(firebase.auth);
  const orderConfirm = useOrderConfirm();

  const openItem = useOpenItem();
  useTitle(openItem.openItem);
 const orders = useOrders();
  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      firebaseDatabase
    }}>
      <GlobalStyle/>
      <NavBar />
      <Order  />
      <Menu />
      {openItem.openItem && <ModalItem />}
      {orderConfirm.openOrderConfirm && <OrderConfirm />}
    </Context.Provider>
    
    
  );
}

export default App;
