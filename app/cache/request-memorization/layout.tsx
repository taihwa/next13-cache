const getProduct = async () => {
  const res = await fetch("https://dummyjson.com/products/1");
  return await res.json();
};
export default async function RequestMemorizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("레이아웃 요청");
  const res = await getProduct();

  return <>{children}</>;
}
