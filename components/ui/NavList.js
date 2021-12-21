import classes from "./NavList.module.css";
import Link from "next/link";
const NavList = (props) => {
  return (
    <nav className={classes.navList}>
      <font>目錄</font>
      <li>
        <div>
          <div className={classes.highLight}></div>
        </div>
        <Link href={`./${props.articleId}#section-1`}>
          {`1. 我只有一分鐘，但是……`}
        </Link>
      </li>
      <li>
        <div>
          <div className={classes.highLight}></div>
        </div>
        <Link href={`./${props.articleId}#section-2`}>
          {"2. 我打電話的原因是……"}
        </Link>
      </li>
      <li>
        <div>
          <div className={classes.highLight}></div>
        </div>
        <Link href={`./${props.articleId}#section-3`}>
          {"3. （公司）的（姓名）建議我聯繫你，因為我們已經幫助過他們……"}
        </Link>
      </li>
      <li>
        <div>
          <div className={classes.highLight}></div>
        </div>
        <Link href={`./${props.articleId}#section-4`}>
          {
            "4. 我打電話是因為我們最近幫助（競爭對手）解決了（痛點），我們也可以幫助您解決這個問題。"
          }
        </Link>
      </li>
      <li>
        <div>
          <div className={classes.highLight}></div>
        </div>
        <Link href={`./${props.articleId}#section-5`}>
          {"5. 很高興能聯繫到你，有件事要請你幫忙。"}
        </Link>
      </li>
      <li>
        <div>
          <div className={classes.highLight}></div>
        </div>
        <Link href={`./${props.articleId}#section-6`}>
          {
            "6.嗨，我們以前從未說過話/見過面。我只是打個電話看看能不能安排下週給你打電話。"
          }
        </Link>
      </li>
      <li>
        <div>
          <div className={classes.highLight}></div>
        </div>
        <Link href={`./${props.articleId}#section-7`}>
          {"7. 我想祝賀你最近升職..."}
        </Link>
      </li>
      <li>
        <div>
          <div className={classes.highLight}></div>
        </div>
        <Link href={`./${props.articleId}#section-8`}>{"綜合所述"}</Link>
      </li>
    </nav>
  );
};

export default NavList;
