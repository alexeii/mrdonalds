import React from 'react'; 
import firebase from "firebase/app";
import 'firebase/auth';
import {GlobalStyle} from './Components/Hooks/Style/GlobalStyle'
import {NavBar} from './Components/Hooks/NavBar/NavBar';
import {Menu} from './Components/Hooks/Menu/Menu';
import {ModalItem} from './Components/Hooks/Modal/ModalItem';
import {Order} from './Components/Hooks/Order/Order';
import {useOpenItem} from './Components/Hooks/useOpenItem';
import {useOrders} from './Components/Hooks/useOrders';
import {useAuth} from './Components/Hooks/useAuth';

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


  const auth = useAuth(firebase.auth);

  const openItem = useOpenItem();
 const orders = useOrders();
  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order {...orders} {...openItem} {...auth}/>
      <Menu {...openItem}/>
      {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
    
    
  );
}

export default App;
