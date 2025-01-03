import style from "@/css/Lowerheader.module.css"
import Link from "next/link"
import Image from "next/image"
export default function Home() {
  return(  <>
    <header className={style.header}>
    <div className={style.container}>
        <h1 className={style.logo}>Hekto</h1>

        <ul className={style.ul}>
            <li className={style.li}> <Link className={style.links} href="./" > Home <Image src="/img/pinkDown.svg" alt="image" width="13" height={10} ></Image> </Link></li>
            <li className={style.li}> <Link className={style.links} href="./" > Pages </Link></li>
            <li className={style.li}> <Link className={style.links} href="./ShopGrid" > Products </Link></li>
            <li className={style.li}> <Link className={style.links} href="./" > Blog </Link></li>
            <li className={style.li}> <Link className={style.links} href="./ShopGrid" > Shop </Link></li>
            <li className={style.li}> <Link className={style.links} href="./Contact" > Contact </Link></li>
        </ul>
        <div className={style.search}>
            <input className={style.input} type="search" placeholder="Search..."/>
      <Image className={style.image} src="/img/sear.png" alt="image" width="20" height={20} ></Image>
            
        </div>
    </div>
    </header>
    </>
  )
}