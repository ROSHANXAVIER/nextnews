import {useRouter} from 'next/router';
import styles from '../styles/toolbar.module.css'

export function Toolbar() {
  const router=useRouter();
  return (
    <div className={styles.main}>
      <div onClick={()=>{router.push('/')}}>HOME</div>
      <div onClick={()=>{router.push('/feed/1')}}>FEED</div>
      <div onClick={()=>{window.location.href='https://www.linkedin.com/in/roshan-xavier-1ab097214/'}}>ABOUT</div>
    </div>
  )
}

