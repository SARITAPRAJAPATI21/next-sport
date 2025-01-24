import styles from './css/footer.module.css'
import Image from 'next/image';


export default  function footer(){
    return(
        <>
            <div className={styles.container}>
            <Image src='/logo.png' width={100} height={50}/>

         <div className={styles.icon}>
         <FontAwesomeIcon icon={faThumbsUp} className="fa-fw" />

         </div>
            </div>
        </>
    );
}