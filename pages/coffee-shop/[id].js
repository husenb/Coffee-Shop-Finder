import React from "react";
import Head from "next/head";
import Image from "next/dist/client/image";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./coffee-shops.module.css";
// import CoffeeStoreData from "../../data/coffee-stores.json";
import cls from "classnames";
import { GoLocation } from "react-icons/go";
import { BiStar } from "react-icons/bi";
import { MdOutlineNearMe } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { fetchCoffeeStores } from "../../lib/coffe-store-data-fetch";

export async function getStaticProps(staticprops) {
  const params = staticprops.params;
  const coffeeStores=await fetchCoffeeStores()
  return {
    props: {
      CoffeeStore: coffeeStores.find((CoffeeStore) => {
        return CoffeeStore.fsq_id.toString() === params.id;
      }),
    },
  };
}
export async function getStaticPaths() {
  const coffeeStores=await fetchCoffeeStores()
  const paths = coffeeStores.map((CoffeeStore) => {
    return {
      params: {
        id: CoffeeStore.fsq_id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}
const voteUpButton = () => {};

const CoffeeStore = (props) => {
  const router = useRouter();


  if (router.isFallback) {
    return <div className={styles.loading}>Getting File</div>;
  }
  const { name,location, imgUrl} = props.CoffeeStore;
  return (
    <>
      <div className={styles.layout}>
        <Head>
          <title>{name}</title>
        </Head>
        <div className={styles.container}>
          <div className={styles.col1}>
            <Link href="/">
              <button className={styles.backToHome}>
                {" "}
                <i>
                  <BiArrowBack />
                </i>{" "}
                Back To Home
              </button>
            </Link>
            <div className={styles.headingWrapper}>
              <h1 className={styles.heading}>{name}</h1>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={imgUrl || "https://images.unsplash.com/photo-1601813913455-118810e79277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
                width={400}
                height={250}
                className={styles.storeImage}
              ></Image>
            </div>
          </div>

          <div className={cls("glass", styles.col2)}>
            <div className={styles.iconWrapper}>
              <i className={styles.icons}>
                <GoLocation />
              </i>
              <p className={styles.text}>{location.formatted_address || "Kathmandu"}</p>
            </div>
            <div className={styles.iconWrapper}>
              <i className={styles.icons}>
                <MdOutlineNearMe />
              </i>
              <p className={styles.text}>{}</p>
            </div>
            <div className={styles.iconWrapper}>
              <i className={styles.icons}>
                <BiStar />
              </i>{" "}
              <p className={styles.text}> 0</p>
            </div>
            <button className={styles.voteButton} onClick={voteUpButton}>
              Click2Vote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CoffeeStore;
