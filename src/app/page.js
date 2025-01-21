import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Mypages/navbar";
import MyHome from './Mypages/home'

export default function Home() {
  return (
    <div >
    
       <Navbar/>
       <MyHome/>
      
    
        
    </div>
  );
}
