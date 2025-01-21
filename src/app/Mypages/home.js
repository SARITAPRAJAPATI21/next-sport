import styles from './css/home.module.css'
import Image from 'next/image';



export default function Home() {
  return (
    <div className={styles.home} >
      
<div className={styles.main}>
      <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 1440 320"><path fill="bisque"
       fillOpacity="1" d="M0,256L60,261.3C120,267,240,277,360,288C480,299,600,309,720,277.3C840,245,960,
       171,1080,144C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,
       320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
  
   <h1> Clash court sports</h1>
   <p>Long Island’s Premier Pick-Up Tennis & Pickleball League </p>
   <div className={styles.btns}>
   <a  className={styles.jbtn} href='/register'> Join Now</a>
   <a  className={styles.fbtn} href='/favq' > FavQ</a> 
   </div>

</div>

<div className={styles.description}>
    <div className={styles.describe}>
    <h4>Welcome to Clash Court Sports</h4>
   <p>At Clash Court Sports, we are dedicated to providing
      everyone with tennis  and pickleball partners.
        It’s simple…. Register, Connect with
        Opponents, Play and Record Scores.</p>
      <p> Whether you’re a beginner or a
    seasoned player looking to compete, 
    we have something for you.</p>
   <p>Come join us and be a part of our tennis and
    pickleball community. Meet new friends, challenge yourself 
   and have a blast. We can’t wait to see you
    on the courts!</p>
    </div>
    <div className={styles.pic}>
     <Image  className={styles.pic1} src='/img1.png' height="200" width="200"  alt='img1'/>
     <Image className={styles.pic2} src='/img2.png' height="200" width="200"  alt='img2'/>  
    </div>
</div>


<div className={styles.register}>
   <h4>Registration</h4>
   <div className={styles.regipic}>
    <div className={styles.content1}>
     <h6>Play Singles - $50</h6> <a   href="/register" className={styles.btn}> Register for Spring 2024</a>
     </div>
     <div className={styles.content2}>
     <h6>Play Singles - $50</h6> <a  href="/register" className={styles.btn}> Register for Spring 2024</a>
     </div>
     <div className={styles.content3}>
     <h6>Play Singles - $50</h6> <a   href="/register" className={styles.btn}> Register for Spring 2024</a>
     </div>
   </div>
</div>




<div className={styles.donation}>
  <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 1440 320"><path fill="bisque"
       fillOpacity="1" d="M0,256L60,261.3C120,267,240,277,360,288C480,299,600,309,720,277.3C840,245,960,
       171,1080,144C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,
       320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
  <h3>Giving Back</h3>
  <p>Your contributions play a direct role in maintaining our school’s tennis courts. By donating, you’re ensuring that our students have a well-kept space to develop their skills and love for
the sport. Your support goes straight to the school, empowering our youth and fostering
a community of enthusiastic athletes. Thank you for considering this cause and
for your invaluable support!</p>
<a href="/donation" className={styles.btn}> Donate To A School Of Your Choice</a>
</div>


<div className={styles.work}>

    <div className={styles.steps}><h4>How it works</h4>
    <ol><li>Register</li>
    <li>Connect with opponents</li>
    <li>Play</li>
    <li>Record Scores</li></ol>
    <a href='/join' className={styles.btn} >Join Now</a>
    </div>   
    <Image  className={styles.me} src='/img5.png' height={400} width={400} alt="works"/>
 </div>


 <div className={styles.founder}>
  <div className={styles.fpara}><p>Bringing all Long Island tennis and pickleball players together.</p><p>
  Hope to see you on the courts.</p> <h6> -Tribby (Founder)</h6></div>
 </div> 

 
 <div className={styles.contact}>
    <div className={styles.contact1}><h1>Contact Us Now</h1>
    <p>Fill out the form below to get in touch with us.
     We are here to answer any questions you may have and provide 
     you with the best tennis experience.
    </p>
    </div>

    <div className={styles.contact2}> 
     <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter email"/>

  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="message" rows="10" ></textarea>
  </div>

  <a  href='#' className={styles.subbtn} >submit</a>
  </div>
 </div>



 </div>
  );
}