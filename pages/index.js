import Head from 'next/head'
import Image from 'next/image'
import {Toolbar} from '../components/Toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <div>
      <Toolbar/>
    <div className={styles.main }>
      <h1 className={styles.heading}>NEWS APP</h1>
      <h11>NEXT JS BY RX</h11>
    </div>
  </div>
   )}