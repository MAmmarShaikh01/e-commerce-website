import style from "@/css/Upperheader.module.css"
import Link from "next/link"
import Image from "next/image"
export default function Header() {
    return(
      <>
     <div className={style.header}>
      <div className={style.cont}>
        <div className={style.mail}>
      <Image src="/img/mail.svg" alt="image" width="13" height={10} ></Image>
      <p className={style.para}>mhhasanul@gmail.com</p>
        </div>

        <div className={style.mail}>
      <Image src="/img/phone.svg" alt="image" width="13" height={10} ></Image>
      <p className={style.para}>(12345)67890</p>

        </div>
      </div>

      <div className={style.second}>

          <p className={`${style.dDowns} ${style.disappear}`}>English <Image src="/img/down.svg" alt="image" width="13" height={10} ></Image></p>

          <p className={`${style.dDowns} ${style.disappear}`}>USD <Image src="/img/down.svg" alt="image" width="13" height={10} ></Image></p>

          <Link href="./Accounts" className={style.dDowns}>Login <Image src="/img/user.svg" alt="image" width="13" height={10} ></Image></Link>

          <Link href="./About" className={style.dDowns}>Wishlist <Image src="/img/heart.svg" alt="image" width="13" height={10} ></Image></Link>
          <Link href="./" className={`${style.dDowns} ${style.space}`}><Image src="/img/cart.svg" alt="image" width="13" height={10} ></Image></Link>
        </div>
     </div>
      </>
    )
  }