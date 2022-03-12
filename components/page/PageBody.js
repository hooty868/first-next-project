import Link from "next/link";
import styles from "./pagebody.module.css";
import Image from "next/image";
import Moment from "moment";

const PageBody = ({ article, hotArticles = [], latestArticles = [] }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const asideArr = ["全部", "科技", "工作", "新聞", "人生"];
  return (
    <div className={styles.container}>
      <section className={styles.slider}>
        <div className={styles.sliderContainer}>
          <p>首頁&nbsp;/&nbsp;&nbsp;{`${article.category}`}&nbsp;</p>
        </div>
      </section>
      <section className={styles.bodySliderBar}>
        <div className={styles.sectionLeft}>
          <div className={styles.postHeader}>
            <Link href="/">{article.category}</Link>
            <h1 className={styles.postHeaderTitle}>{article.title}</h1>
            <div className={styles.postMeta}>
              <p>{`作者 : ${article.author.name}`}</p>
              <p>{`發布時間: JUNE 10, 2019 瀏覽數: ${article.read}`}</p>
            </div>
          </div>
          <div className={styles.coverImageContainer}>
            <img
              className={styles.coverImage}
              src={article.sectionOne.image}
              alt="description for image"
            />
          </div>
          <div className={styles.postTitle}>
            <p>
              {article.abstract.split("\n").map((c, i) => {
                return (
                  <span key={i.toString()}>
                    {c}
                    <br />
                  </span>
                );
              })}
            </p>
          </div>
          <div className={styles.postContent}>
            <h2>{article.sectionOne.title}</h2>
            <p>
              {article.sectionOne.content.split("\n").map((c, i) => {
                return (
                  <span key={i.toString()}>
                    {c}
                    <br />
                  </span>
                );
              })}
            </p>
          </div>
          <div className={styles.postContent}>
            <h2>{article.sectionTwo.title}</h2>
            <p>
              {article.sectionTwo.content.split("\n").map((c, i) => {
                return (
                  <span key={i.toString()}>
                    {c}
                    <br />
                  </span>
                );
              })}
            </p>
            {!!article?.recommandOne?.title && (
              <div className={styles.recommendContainer}>
                <h2>推薦閱讀</h2>
                <Link href={`/${article.recommandOne.id}`}>
                  {article.recommandOne.title}
                </Link>
              </div>
            )}
          </div>
          <div className={styles.coverImageContainer}>
            {!!article.sectionTwo.image && (
              <img
                className={styles.coverImage}
                src={article.sectionTwo.image}
                alt="description for image"
              />
            )}
          </div>
          <div className={styles.postContent}>
            <h2>{article.sectionThree.title}</h2>
            <p>
              {article.sectionThree.content.split("\n").map((c, i) => {
                return (
                  <span key={i.toString()}>
                    {c}
                    <br />
                  </span>
                );
              })}
            </p>
          </div>
          <div className={styles.postContent}>
            <h2>{article.sectionFour.title}</h2>
            <p>
              {article.sectionFour.content.split("\n").map((c, i) => {
                return (
                  <span key={i.toString()}>
                    {c}
                    <br />
                  </span>
                );
              })}
            </p>
            {!!article?.recommandTwo?.title && (
              <div className={styles.recommendContainer}>
                <h2>推薦閱讀</h2>
                <Link href={`/${article.recommandTwo.id}`}>
                  {article.recommandTwo.title}
                </Link>
              </div>
            )}
          </div>
          <div className={styles.coverImageContainer}>
            {!!article.sectionThree.image && (
              <img
                className={styles.coverImage}
                src={article.sectionThree.image}
                alt="description for image"
              />
            )}
          </div>
          <div className={styles.postContent}>
            <h2>{article.sectionFive.title}</h2>
            <p>
              {article.sectionFive.content.split("\n").map((c, i) => {
                return (
                  <span key={i.toString()}>
                    {c}
                    <br />
                  </span>
                );
              })}
            </p>
          </div>
          <div className={styles.postContent}>
            <h2>{article.sectionSix.title}</h2>
            <p>
              {article.sectionSix.content.split("\n").map((c, i) => {
                return (
                  <span key={i.toString()}>
                    {c}
                    <br />
                  </span>
                );
              })}
            </p>
          </div>
          {!!article?.recommandThree?.title && (
            <div className={styles.recommendContainer}>
              <h2>推薦閱讀</h2>
              <Link href={`/${article.recommandThree.id}`}>
                {article.recommandThree.title}
              </Link>
            </div>
          )}
          <div className={styles.postContent}>
            <h2>{article.sectionSeven.title}</h2>
            <p>
              {article.sectionSeven.content.split("\n").map((c, i) => {
                return (
                  <span key={i.toString()}>
                    {c}
                    <br />
                  </span>
                );
              })}
            </p>
          </div>
        </div>

        <div className={styles.sectionRight}>
          <div className={styles.rightContainer}>
            <aside className={styles.popularPost}>
              <h4 className={styles.popularPostTitle}>熱門貼文</h4>
              {hotArticles.slice(0, 3).map((item) => {
                return (
                  <div key={item.id} className={styles.popularPostCard}>
                    <img
                      alt="description for image"
                      className={styles.popularPostImage}
                      src={item.sectionOne.image}
                    />
                    <div className={styles.popularPostTag}>
                      <p>{Moment(item.writeTime).format("MMM DD, YYYY")}</p>
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                );
              })}
            </aside>
            <aside className={styles.popularPost}>
              <h4 className={styles.popularPostTitle}>最近貼文</h4>
              {latestArticles.map((item) => {
                return (
                  <div key={item.id} className={styles.latestPost}>
                    <img
                      alt="description for image"
                      src={item.sectionOne.image}
                    />
                    <div className={styles.latestPostTag}>
                      <h4>{item.title}</h4>
                      <p>{Moment(item.writeTime).format("MMM DD, YYYY")}</p>
                    </div>
                  </div>
                );
              })}
            </aside>
            <aside className={styles.popularPost}>
              <h4 className={styles.popularPostTitle}>分類</h4>
              {asideArr.map((item) => {
                return (
                  <div key={item} className={styles.categoryContainer}>
                    <Link href="/">{item}</Link>
                    <span>{`(14000)`}</span>
                  </div>
                );
              })}
            </aside>
            <aside className={styles.popularPost}>
              <h4 id="subscription" className={styles.subscribeTitle}>
                訂閱我們
              </h4>
              <input
                placeholder="輸入信箱，訂閱您最新資訊"
                className={styles.subscribeInput}
              ></input>
              <button className={styles.navContainerSubscribe}>訂閱我們</button>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageBody;
