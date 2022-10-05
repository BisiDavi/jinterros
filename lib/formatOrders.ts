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

export function formatOrderObject(orders: any) {
  if (orders) {
    const orderEntries = Object.entries(orders);
    let orderGroup: any[] = [];
    orderEntries.map((item: any) => {
      const orderValue: any = Object.values(item[1])[0];
      const status: string | any = Object.values(item[1])[1];
      const parsedStatus = status ? JSON.parse(status) : null;
      const deliveryStatus = parsedStatus ? parsedStatus : "IN-PROGRESS";
      const formattedOrder = JSON.parse(orderValue);
      orderGroup.push({ route: item[0], deliveryStatus, ...formattedOrder });
    });
    return orderGroup;
  }
}

export function formatDeliveryStatus(status: string) {
  return status === "IN-PROGRESS"
    ? "Unfulfilled"
    : status === "DELIVERED"
    ? "Fulfilled"
    : "Cancelled";
}

export function formatDBOrders(data: any) {
  if (data) {
    const dbDatab = Object.values(data);
    const dataArray: any[] = [];
    dbDatab.map((item: any) => {
      const formattedData: any = Object.values(item);
      let parsedData;
      parsedData = JSON.parse(formattedData[0]);
      const date = new Date(parsedData.date);

      const cData = parsedData.date
        ? {
            date: `${date.toDateString()}, ${date.toLocaleTimeString([], {
              hour12: true,
              hour: "2-digit",
              minute: "2-digit",
            })}`,
            authorName: parsedData?.author?.name,
            createdAt: parsedData.date,
          }
        : "";
      if (parsedData) {
        dataArray.push({
          ...parsedData,
          ...cData,
        });
      }
    });
    return dataArray;
  }
}
