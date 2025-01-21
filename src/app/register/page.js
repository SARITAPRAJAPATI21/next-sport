import styles from './register.module.css'
import Navbar from '../Mypages/navbar';
export default function Register() {
    return (
      <div className={styles.Login}>
      <Navbar/>
      <div className={styles.container1}>
      <svg  className={styles.waves} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="bisque" 
      fill-opacity="1" d="M0,0L60,53.3C120,107,240,213,360,261.3C480,309,600,299,720,272C840,245,
      960,203,1080,202.7C1200,203,1320,245,1380,266.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,
      320C240,320,120,320,60,320L0,320Z"></path></svg>

  <h1>The Event is coming soon</h1>
  <div className={styles.para}>
  <p>Get ready for something exciting! Our team is hard at</p><p>
  work crafting an exceptional experience for you.</p>
  </div>
   <a className={styles.btn} href='/join' >Join Now</a>
   </div>



   <div className={styles.timer}>
    <div className={styles.boxes}>
        <div className={styles.box}><h3>14</h3> <h6>Hourse</h6></div>
         <div className={styles.box}><h3>02</h3><h6>Minutes</h6></div>
         <div className={styles.box}><h3>22</h3><h6>Seconds</h6></div>
    </div>
</div>




<div className={styles.register}>
  <div className={styles.d1}>

  <div className={styles.row}>
    <div className={styles.col}>
    <label>FIrstName</label>
     <input type="text" class="form-control" id='name' placeholder="First name" />
    </div>

    <div className={styles.col}>
    <label>LasttName</label>
      <input type="text" class="form-control"  id='name' placeholder="Last name"/>
    </div>
  </div>
  <div className={styles.row}>
    <div className={styles.col}>
    
     <input type="text" class="form-control"  id='name' placeholder="Phone Number"/>
    </div>
    <div className={styles.col}>
      <input type="text" class="form-control"   id='name' placeholder="Email"/>
    </div>
  </div>
  <div className={styles.row}>
    <div className={styles.col}>
     <input type="text" class="form-control" id='name' placeholder="City"/>
    </div>
    <div className={styles.col}>
      <input type="text" class="form-control"  id='name' placeholder="State"/>
    </div>
  </div>
  <div className={styles.row}>
    <div className={styles.col}>
     <input type="text" class="form-control" id='name' placeholder="Zip/postal Code"/>
    </div>
  </div>
  </div>

  <div className={styles.d2}>
  <div className={styles.d21}>
  <h4>Pickleball Spring <span>*</span></h4>
 <div><input type='radio'/> Singles-$50</div> 
 <div><input type='radio'/> Doubles-$35</div> 
 <div><input type='radio'/> N/A</div> 
 </div>

  
  <div className={styles.d22}>
  <h4>Tennis Spring 2024* <span>*</span></h4>
 <div><input type='radio'/> Singles-$50</div> 
 <div><input type='radio'/>  Doubles-$35</div> 
 <div><input type='radio'/> N/A</div> 
 </div>
 </div>

 <div className={styles.d3}>
 <div className={styles.d31}>
  <h4>Skill Level <span>*</span></h4>
 <div><input type='radio'/> Beginner (1.0-3.0)</div> 
 <div><input type='radio'/>  Advanced (3.5-4.0)</div> 
 
 </div>
 </div>
 <a className={styles.regibtn} href='/join'> Register Now</a> 
</div>











   </div>



     


    );
  }