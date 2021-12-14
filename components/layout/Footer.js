import classes from "./Footer.module.css";
import Link from "next/link";

function MainFooter() {
  return (
    <footer className={classes.footer}>
      <Link href="/">Copyright ©2021</Link>
      <div>
        <Link href="/">/ 服務條款</Link>
        <Link href="/">/ 隱私權政策</Link>
        <Link href="/"> / 聯絡我們</Link>
      </div>
    </footer>
  );
}

export default MainFooter;
