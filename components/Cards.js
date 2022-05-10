import Link from "next/link";
import Image from "next/image"
import styles from "../components/cards.module.css"
import classNames from "classnames";

const Cards =(props)=>{
    return( 
        <Link href={props.href}>
            <a className={styles.cardLink} >
                <div className={classNames("glass",styles.container)}>
                    <div className={styles.cardHeaderWrapper}>
                        <h2 className={styles.cardHeader}>{props.name}</h2>
                    </div>
                    <div className={styles.cardImageWrapper}>
                         <Image className={styles.cardImage} src={props.imgUrl} width={220} height={150} />
                    </div>
                </div>
            </a>
        </Link>
    )
}
export default Cards;