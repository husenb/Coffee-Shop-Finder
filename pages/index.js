import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import coffeeStoresData from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  console.log("Hi")
  const options = {

    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'fsq30vFmjmgJBATlFVsRXrgw0lsUb1dENJebY2ZjvSlycVE='
    }
  };
  
  const response= await fetch('https://api.foursquare.com/v3/places/search?query=hotel&ll=43.68241345465508%2C%20-79.40965357895736&radius=1000', options)
   const data= await response.json()
   console.log(data)
   
  return {
    props: {
      coffeeStores:coffeeStoresData
    },
  };
}


export default function Home(props) {
  const handleOnBannerButtonClick = () => {
    console.log("Hi Banner Button Clicked");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner
          buttonText="View Store nearby"
          handleOnClick={handleOnBannerButtonClick}
        />
        <div className={styles.heroImage}>
          {/* <Image src="/static/CoffeeDoddle-1.png" className={styles.mainImage} width={250} height={180}/> */}
        </div>

        {props.coffeeStores.length > 0 && (
          <>
            <h2 className={styles.heading2}>Kathmandu Stores</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map((coffeeStore) => {
                return (
                  <Cards
                    key={coffeeStore.id}
                    name={coffeeStore.name}
                    imgUrl={coffeeStore.imgUrl}
                    href={`/coffee-shop/${coffeeStore.id}`}
                    className={styles.card}
                  />
                );
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
