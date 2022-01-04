import classes from "./MeetupDetail.module.css";
import Card from "../ui/Card";
import Link from "next/link";

const MeetUpDetail = (props) => {
  return (
    <article className={classes.detail}>
      <img className={classes.firstImage} src={props.image} alt={props.title} />
      <section className={classes.titleContainer}>
        <h3>科技</h3>
        <h1>{props.title}</h1>
        <div className={classes.title}>
          <p className={classes.author}>{"Emir Atli "}</p>
          <p className={classes.readCount}>{` · 7個閱讀者`}</p>
        </div>
      </section>
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
      <div className={classes.description}>
        <h2 id="section-1">
          隨著入站營銷技術的日益流行，您會認為冷呼叫已死，對嗎？
        </h2>
        <p className={classes.abstract}>
          嗯，82%
          的買家在開始與銷售代表的對話後接受了與銷售代表的會面，這證明了這種舊的銷售技巧在
          2021 年非常活躍。
        </p>
        <p className={classes.abstract}>
          但是，要使此技術有效，您必須遵循正確的腳本——這要求您在潛在客戶掛斷電話之前打通電話的前五秒。這就是為什麼冷呼叫的初始線路至關重要的原因。下面是
          8
          條通向成功通話的開場白，但在我提到這些線路以及它們為何有效之前，您應該記住以下幾點：
          這不言而喻，但在下面幾行之前，您應該始終從基本的“嗨，約翰。我是 X
          公司的 Sam Smith。”
        </p>
        <p className={classes.abstract}>
          但是，要使此技術有效，您必須遵循正確的腳本——這要求您在潛在客戶掛斷電話之前打通電話的前五秒。這就是為什麼冷呼叫的初始線路至關重要的原因。下面是
          8
          條通向成功通話的開場白，但在我提到這些線路以及它們為何有效之前，您應該記住以下幾點：
          這不言而喻，但在下面幾行之前，您應該始終從基本的“嗨，約翰。我是 X
          公司的 Sam Smith。”
          如果你想讓潛在客戶聽你的話，他們至少應該在他們的腦海中有個名字。
          冷呼叫，顧名思義，就是打電話給尚未對您的服務表示興趣的潛在客戶：但這並不意味著您應該在沒有先驗知識的情況下撥打電話。在
          LinkedIn 上快速搜索有關您要致電的潛在客戶的信息會有所幫助。
          話雖如此，這裡有八條冷電話開通線路，可以讓您的潛在客戶傾聽。
        </p>
        <img
          src={"https://upload.cc/i1/2021/07/06/MUlrvn.png"}
          alt={"Get your FREE cold calling course"}
        />
        <h1 id="section-2">
          {
            "我打電話是因為我們最近幫助（競爭對手）解決了（痛點），我們也可以幫助您解決這個問題。"
          }
        </h1>
        <p className={classes.abstract}>
          但是，要使此技術有效，您必須遵循正確的腳本——這要求您在潛在客戶掛斷電話之前打通電話的前五秒。這就是為什麼冷呼叫的初始線路至關重要的原因。下面是
          8
          條通向成功通話的開場白，但在我提到這些線路以及它們為何有效之前，您應該記住以下幾點：
          這不言而喻，但在下面幾行之前，您應該始終從基本的“嗨，約翰。我是 X
          公司的 Sam Smith。”
          如果你想讓潛在客戶聽你的話，他們至少應該在他們的腦海中有個名字。
          冷呼叫，顧名思義，就是打電話給尚未對您的服務表示興趣的潛在客戶：但這並不意味著您應該在沒有先驗知識的情況下撥打電話。在
          LinkedIn 上快速搜索有關您要致電的潛在客戶的信息會有所幫助。
          話雖如此，這裡有八條冷電話開通線路，可以讓您的潛在客戶傾聽。
        </p>
        <p className={classes.abstract}>
          但是，要使此技術有效，您必須遵循正確的腳本——這要求您在潛在客戶掛斷電話之前打通電話的前五秒。這就是為什麼冷呼叫的初始線路至關重要的原因。下面是
          8
          條通向成功通話的開場白，但在我提到這些線路以及它們為何有效之前，您應該記住以下幾點：
          這不言而喻，但在下面幾行之前，您應該始終從基本的“嗨，約翰。我是 X
          公司的 Sam Smith。”
          如果你想讓潛在客戶聽你的話，他們至少應該在他們的腦海中有個名字。
          冷呼叫，顧名思義，就是打電話給尚未對您的服務表示興趣的潛在客戶：但這並不意味著您應該在沒有先驗知識的情況下撥打電話。在
          LinkedIn 上快速搜索有關您要致電的潛在客戶的信息會有所幫助。
          話雖如此，這裡有八條冷電話開通線路，可以讓您的潛在客戶傾聽。
        </p>
        <img
          src={"https://upload.cc/i1/2021/07/06/MUlrvn.png"}
          alt={"Get your FREE cold calling course"}
        />
        <h1 id="section-3">
          {
            "我打電話是因為我們最近幫助（競爭對手）解決了（痛點），我們也可以幫助您解決這個問題。"
          }
        </h1>
        <p className={classes.abstract}>
          但是，要使此技術有效，您必須遵循正確的腳本——這要求您在潛在客戶掛斷電話之前打通電話的前五秒。這就是為什麼冷呼叫的初始線路至關重要的原因。下面是
          8
          條通向成功通話的開場白，但在我提到這些線路以及它們為何有效之前，您應該記住以下幾點：
          這不言而喻，但在下面幾行之前，您應該始終從基本的“嗨，約翰。我是 X
          公司的 Sam Smith。”
          如果你想讓潛在客戶聽你的話，他們至少應該在他們的腦海中有個名字。
          冷呼叫，顧名思義，就是打電話給尚未對您的服務表示興趣的潛在客戶：但這並不意味著您應該在沒有先驗知識的情況下撥打電話。在
          LinkedIn 上快速搜索有關您要致電的潛在客戶的信息會有所幫助。
          話雖如此，這裡有八條冷電話開通線路，可以讓您的潛在客戶傾聽。
        </p>
        <p className={classes.abstract}>
          但是，要使此技術有效，您必須遵循正確的腳本——這要求您在潛在客戶掛斷電話之前打通電話的前五秒。這就是為什麼冷呼叫的初始線路至關重要的原因。下面是
          8
          條通向成功通話的開場白，但在我提到這些線路以及它們為何有效之前，您應該記住以下幾點：
          這不言而喻，但在下面幾行之前，您應該始終從基本的“嗨，約翰。我是 X
          公司的 Sam Smith。”
          如果你想讓潛在客戶聽你的話，他們至少應該在他們的腦海中有個名字。
          冷呼叫，顧名思義，就是打電話給尚未對您的服務表示興趣的潛在客戶：但這並不意味著您應該在沒有先驗知識的情況下撥打電話。在
          LinkedIn 上快速搜索有關您要致電的潛在客戶的信息會有所幫助。
          話雖如此，這裡有八條冷電話開通線路，可以讓您的潛在客戶傾聽。
        </p>
        <img
          src={"https://upload.cc/i1/2021/07/06/MUlrvn.png"}
          alt={"Get your FREE cold calling course"}
        />
        <h2 className={classes.related}>相關文章</h2>
      </div>
      <div className={classes.relativeList}>
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <li key={item.toString()} className={classes.item}>
              <Card>
                <div className={classes.image}>
                  <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                  <p>{props.address}</p>
                  <h2>{props.title}</h2>
                  <div className={classes.actions}>
                    <p>
                      At its best, sales is facilitation, not manipulation.
                      Here, guided by this philosophy, you'll learn 4 strategies
                      to improve your startup's revenue process. And bonus: I'll
                      show you how Close can help.
                    </p>
                  </div>
                  <div className={classes.footer}>
                    <span>Marc Belgrave</span>
                  </div>
                </div>
              </Card>
            </li>
          );
        })}
      </div>
    </article>
  );
};

export default MeetUpDetail;
