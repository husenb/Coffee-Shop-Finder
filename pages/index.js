import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import coffeeStores from '../data/coffee-stores.json'


export default function Home() {
  const handleOnBannerButtonClick=() => {
    console.log("Hi Banner Button Clicked")

  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner 
        buttonText='View Store nearby' 
        handleOnClick={handleOnBannerButtonClick}/>
        <div className={styles.heroImage}>
        {/* <Image src="/static/CoffeeDoddle-1.png" className={styles.mainImage} width={250} height={180}/> */}
        </div>  
        <div className={styles.cardLayout}>
      {coffeeStores.map(coffeeStore =>{
        return(
       <Cards 
         name= {coffeeStore.name} 
         imgUrl={coffeeStore.imgUrl}
        href={`/coffee-shop/${coffeeStore.id}`}  className={styles.card} />
        )})}
   

      </div>
      </main>
      
      
    </div>
  )
}
