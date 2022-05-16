import React from "react";
import Head from "next/head";
import Image from "next/dist/client/image";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./coffee-shops.module.css";
import CoffeeStoreData from "../../data/coffee-stores.json";
import cls from "classnames";
import { GoLocation } from "react-icons/go";
import { BiStar } from "react-icons/bi";
import { MdOutlineNearMe } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";

export function getStaticProps(staticprops) {
  const params = staticprops.params;
  return {
    props: {
      CoffeeStore: CoffeeStoreData.find((CoffeeStore) => {
        return CoffeeStore.id.toString() === params.id;
      }),
    },
  };
}
export function getStaticPaths() {
  const paths = CoffeeStoreData.map((CoffeeStore) => {
    return {
      params: {
        id: CoffeeStore.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}
const voteUpButton = () => {
  let vote =0;

  
};

const CoffeeStore = (props) => {
  const router = useRouter();

  const { name, address, imgUrl, neighbourhood } = props.CoffeeStore;

  if (router.isFallback) {
    return <div className={styles.loading}>Getting File</div>;
  }
  return (
    <>
      <div className={styles.layout}>
        <Head>
          <title>{name}</title>
        </Head>
        <div className={styles.container}>
          <div className={styles.col1}>
            <Link href="/">
              <button className={styles.backToHome}> <i><BiArrowBack/></i> Back To Home</button>
            </Link>
            <div className={styles.headingWrapper}>
              <h1 className={styles.heading}>{name}</h1>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={imgUrl}
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
              <p className={styles.text}>
                {address}
              </p>
            </div>
            <div className={styles.iconWrapper}>
            <i className={styles.icons}>
                  <MdOutlineNearMe />
                </i>
              <p className={styles.text}>
                
                {neighbourhood}
              </p>
            </div>
            <div className={styles.iconWrapper}>
            <i className={styles.icons}>
                  <BiStar />
                </i>{" "}
              <p className={styles.text}>
                {" "}
              
                0
              </p>
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
