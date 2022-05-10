import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './coffee-shops.module.css'


const CoffeeStore = () => {
    const router=useRouter();
    console.log("Router", router)
  return (
<>
<main className={styles.main}>
    <div> <h2> CoffeeStore {router.query.id} </h2> </div>
    <Link href="/"> 
    <button className={styles.backToHome}>
     Back To Home
     </button>
      </Link>
      </main>
    </>
  )
}

export default CoffeeStore