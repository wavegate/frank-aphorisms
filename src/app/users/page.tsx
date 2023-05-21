async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Users() {
  const data = await getData();
  return (
    <div>
      <h1>Posts</h1>
      {data.map((user: any) => {
        return (
          <div key={user.id}>
            <div>UserId: {user.id}</div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
          </div>
        );
      })}
    </div>
  );
}
