const getProduct = async () => {
  const res = await fetch("https://dummyjson.com/products/1");
  return await res.json();
};
const DataCachePage = async () => {
  const res = await getProduct();
  return <div>{JSON.stringify(res)}</div>;
};

export default DataCachePage;
