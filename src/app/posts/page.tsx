import styles from "./styles.module.scss";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Posts() {
  const data = await getData();
  return (
    <div>
      <h1>Posts</h1>
      <div>Hi</div>
      {data.map((post: any) => {
        return (
          <div key={post.id}>
            <div className={`${styles["boxy"]}`}>UserId: {post.userId}</div>
            <div>Title: {post.title}</div>
            <div>Body: {post.body}</div>
          </div>
        );
      })}
    </div>
  );
}
