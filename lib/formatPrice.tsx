export function formatPrice(price: number) {
  const productPrice = price?.toFixed(2);
  return numberWithCommas(productPrice);
}

export function numberWithCommas(x: number | string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getTotalRevenue(orders: any[]) {
  let totalRevenue = 0;
  orders.map((item) => {
    totalRevenue += Number(item.purchase_units[0].amount.value);
  });
  return formatPrice(totalRevenue);
}
