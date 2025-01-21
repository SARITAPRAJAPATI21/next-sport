import styles from './favq.module.css'
import Navbar from '../Mypages/navbar';

export default function favq() {
    return (
      <div className={styles.favq} >
      <Navbar/>
       <div className={styles.container}>
      
      <h1 className={styles.fav}>FAQ</h1>
      <div className={styles.dropdown}>
       <button>
       <h4 className={styles.title}> RULES, ETIQUETTE & DISCLAIMERS</h4>
        <h1 className={styles.symbol}>^</h1>
       </button>


       <div className={styles.content}>
           <p>1. Communicate with other players in your group, this way you can schedule your matches ahead of time.

</p><p>2. Respond to emails/ calls with-in 24 hours. Understand that everyone is as busy as you.

</p><p>3. Honor all calls. Most times your opponent has a better view. Keep it honest.

</p><p>4. Clash Court Sports does not promote betting of any kind. We will not be responsible for any form of gambling.

</p><p>5. Know your body, limitations and skillset. This is supposed to be fun. Clash Court Sports will not be responsible for any injuries during play.

</p><p>6. Tennis courts and Pickleball courts are not the same courts. Do NOT alter any lines on public courts.</p>
       </div>
      </div>



     
      </div>



      
        
    
      </div>
    );
  }