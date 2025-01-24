import styles  from './login.module.scss'
import Navbar from '../Mypages/navbar';
export default function Login() {
  return (
    <div className={styles.login} >

    <Navbar/>
    <div className={styles.container1}>
       <svg  className={styles.waves} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="bisque" 
       fill-opacity="1" d="M0,0L60,53.3C120,107,240,213,360,261.3C480,309,600,299,720,272C840,245,
       960,203,1080,202.7C1200,203,1320,245,1380,266.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,
       320C240,320,120,320,60,320L0,320Z"></path></svg>
 </div>
    
      
 
 <form className={styles.log}>
  <div className="form-group" id={styles.form}>
    <label htmlFor="exampleInputEmail1">Email address <span>*</span></label>
    <input type="email" class="form-control" id={styles.Email1} aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group" id={styles.form}>
    <label htmlFor="exampleInputPassword1">Password <span>*</span></label>
    <input type="password" class="form-control" id={styles.Password1} placeholder="Password"/>
  </div>
  <div class="form-check" id={styles.form}>
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className={styles.btn}>Submit</button>

</form>

    
        
    </div>
  );
}