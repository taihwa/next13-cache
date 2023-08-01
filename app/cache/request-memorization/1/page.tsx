const getProduct = async () => {
  const { signal } = new AbortController();
  const res = await fetch("https://dummyjson.com/products/1", { signal });
  return await res.json();
};
const RequestMemorizationPage1 = async () => {
  console.log("1페이지");
  const res = await getProduct();
  return <p>{JSON.stringify(res)}</p>;
};

export default RequestMemorizationPage1;
