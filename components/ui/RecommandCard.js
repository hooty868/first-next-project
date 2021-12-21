import Link from "next/link";
const Card = ({ imageSrc }) => {
  return (
    <Link href={`/`}>
      <div
        style={{
          width: "100%",
          height: 156,
          padding: "40px 0",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            color: "#000",
            fontSize: 12,
          }}
        >
          <p
            style={{
              textDecoration: "underline",
              marginBottom: 10,
            }}
          >
            科技
          </p>
          <p
            style={{
              fontWeight: 600,
              marginBottom: 10,
              fontSize: 18,
            }}
          >
            “夢想和希望的墓地”：阿富汗人才流失的內部
          </p>
          <p
            style={{
              marginBottom: 10,
            }}
          >
            米切爾·普羅瑟羅
          </p>
          <time>08.13.21</time>
        </div>
        <img style={{ width: 80, height: 80 }} src={imageSrc} alt="示範" />
      </div>
    </Link>
  );
};

export default Card;
