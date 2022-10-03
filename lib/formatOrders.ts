export function getCustomers(orders: any) {
  let orderKeyArray: any = [];
  if (orders) {
    const orderKeys = Object.keys(orders);
    orderKeys.map((item) => {
      const parsedItem = item.split("-")[0];
      orderKeyArray.push(parsedItem);
    });
    const uniqueData = new Set(orderKeyArray);
    const uniqueCustomer = Array.from(uniqueData);
    return uniqueCustomer;
  }
  return [];
}
