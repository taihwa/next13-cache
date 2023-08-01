const getProduct = async () => {
  const { signal } = new AbortController();
  const res = await fetch("https://dummyjson.com/products/1", { signal });
  return await res.json();
};
const OptingOut = async () => {
  console.log("optingOut");
  const res = await getProduct();
  return <div>{JSON.stringify(res)}</div>;
};

export default OptingOut;
