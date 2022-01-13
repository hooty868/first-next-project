import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <h1 className={classes.logo}>
          <Link href="/">聚會預定</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link href="/new-meetup/admin">管理活動</Link>
            </li>
            <li>
              <Link href="/new-meetup">新增活動</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
