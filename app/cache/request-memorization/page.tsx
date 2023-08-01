const getProduct = async () => {
  const res = await fetch("https://dummyjson.com/products/1");
  return await res.json();
};
const RequestMemorizationPage = async () => {
  console.log("page 요청");
  const res = await getProduct();
  return <div>{JSON.stringify(res, null, 2)}</div>;
};

export default RequestMemorizationPage;
