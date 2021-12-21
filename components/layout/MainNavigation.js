import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <h1 className={classes.logo}>
          <Link href="/">解密之書</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link href="/">科技</Link>
            </li>
            <li>
              <Link href="/new-article">工作</Link>
            </li>
            <li>
              <Link href="/">人生</Link>
            </li>
            <li>
              <Link href="/">娛樂</Link>
            </li>
            <li>
              <Link href="/">時事</Link>
            </li>
            <li>
              <Link href="/">購物</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
