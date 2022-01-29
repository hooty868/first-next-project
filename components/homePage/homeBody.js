import Link from "next/link";
import styles from "./homebody.module.css";
import Moment from "moment";
import { useRouter } from "next/router";

const HomeBody = ({
  articles = [],
  hotArticles = [],
  latestArticles = [],
  TagArticles = [],
}) => {
  const router = useRouter();
  const asideArr = ["全部", "科技", "工作", "人生", "娛樂", "知識", "時事"];
  return (
    <div className={styles.container}>
      <section className={styles.slider}>
        <div className={styles.sliderContainer}>
          {hotArticles.slice(0, 3).map((item) => {
            return (
              <div
                key={item.id}
                className={styles.sliderPost}
                onClick={() => {
                  router.push(`/article/${item.id}`);
                }}
              >
                <img
                  className={styles.popularPostImage}
                  src={item.sectionOne.image}
                  alt="post-image"
                />
                <div className={styles.bodySliderPostMeta}>
                  <span>Mar 23, 2021</span>
                  <h4>{item.title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.bodySliderBar}>
        <h2 className={styles.bodySliderSpan}>推薦閱讀</h2>
        <div className={styles.sectionLeft}>
          {articles.map((item) => {
            return (
              <div key={item.id} className={styles.postCard}>
                <article className={styles.article}>
                  <div className={styles.postThumbnail}>
                    <Link href={`/article/${item.id}`}>
                      <a>
                        <img
                          className={styles.postImage}
                          src={item.sectionOne.image}
                          alt="post-image"
                        />
                      </a>
                    </Link>
                    <div className={styles.postImageTag}>{item.category}</div>
                  </div>
                  <div className={styles.postContent}>
                    <h4>
                      <Link href={`/article/${item.id}`}>{item.title}</Link>
                    </h4>
                    <div className={styles.postMeta}>
                      <p>{`BY: ${item.author.name}`}</p>
                      <span />
                      <p>{`MAR 23, 2021`}</p>
                      <span />
                      <p>{`${item.read} 觀看數`}</p>
                    </div>
                    <div className={styles.postShortDes}>
                      <p>
                        {item.abstract
                          .slice(0, 100)
                          .split("\n")
                          .map((c, i) => {
                            return (
                              <span key={i.toString()}>
                                {c}
                                <br />
                              </span>
                            );
                          })}
                        ....
                      </p>
                    </div>
                  </div>
                  <div className={styles.postFooter}>
                    <Link href={`/article/${item.id}`}>
                      <a>
                        <p>{`閱讀更多`}</p>
                      </a>
                    </Link>
                  </div>
                </article>
              </div>
            );
          })}
          {/* <div className={styles.articleFooter}>
            <p>加載更多</p>
          </div> */}
        </div>
        <div className={styles.sectionRight}>
          <div className={styles.rightContainer}>
            <aside className={styles.popularPost}>
              <h4 className={styles.popularPostTitle}>熱門貼文</h4>
              {hotArticles.slice(3, 7).map((item) => {
                return (
                  <div key={item.id} className={styles.popularPostCard}>
                    <img
                      className={styles.popularPostImage}
                      src={item.sectionOne.image}
                      alt="post-image"
                    />
                    <div className={styles.popularPostTag}>
                      <span>Mar 23, 2021</span>
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
                  <Link key={item.id} href={`/article/${item.id}`}>
                    <a>
                      <div key={item.id} className={styles.latestPost}>
                        <img src={item.sectionOne.image} alt="post-image" />
                        <div className={styles.latestPostTag}>
                          <h4>{item.title}</h4>
                          <span>Mar 23, 2021</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                );
              })}
            </aside>
            <aside className={styles.popularPost}>
              <h4 className={styles.popularPostTitle}>分類</h4>
              {asideArr.map((item) => {
                return (
                  <div key={item} className={styles.categoryContainer}>
                    <Link href="/">{item}</Link>
                    <span>
                      {`(${
                        item === "全部"
                          ? TagArticles.length
                          : TagArticles.filter((tag) => tag === item).length
                      })`}
                    </span>
                  </div>
                );
              })}
            </aside>
            <aside className={styles.popularPost}>
              <h4 id="subscription" className={styles.subscribeTitle}>
                訂閱我們
              </h4>
              <input placeholder="您的名稱" className={styles.subscribeInput} />
              <input
                placeholder="輸入信箱，訂閱您最新資訊"
                className={styles.subscribeInput}
              />
              <button className={styles.navContainerSubscribe}>訂閱我們</button>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBody;
