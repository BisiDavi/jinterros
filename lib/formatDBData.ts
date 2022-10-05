export function formatDBData(data: any) {
  if (data) {
    const dbDatab = Object.values(data);
    const dataArray: any[] = [];
    dbDatab.map((item: any) => {
      const formattedData: any = Object.values(item);
      let parsedData;
      if (formattedData.length === 1) {
        parsedData = JSON.parse(formattedData);
      } else if (formattedData.length > 1) {
        const tempData = formattedData[formattedData.length - 1];
        parsedData = JSON.parse(tempData);
      }
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

export function formatDBDataSlug(data: string) {
  const formatData = JSON.parse(data);
  const values: string | any = Object.values(formatData);
  const valuesData: string | any = values[values.length - 1];
  return JSON.parse(valuesData);
}

export function formatDBUsers(data: any) {
  const values: string | any = Object.values(data);

  const formattedArray: any[] = [];
  values.map((item: string) => {
    formattedArray.push(JSON.parse(item));
  });
  return formattedArray;
}

export function formatNewsletter(data: any) {
  const values: string | any = Object.values(data);

  const formattedArray: any[] = [];
  values.map((item: string) => {
    const parsedItem = JSON.parse(item);
    const date = new Date(parsedItem.date);
    const formattedDate = date.toLocaleDateString([], {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
    });

    formattedArray.push({
      date: formattedDate,
      email: parsedItem.email,
    });
  });
  return formattedArray;
}

export function sortDataByDate(dataArray: any) {
  if (dataArray) {
    return dataArray.sort(function (a: any, b: any) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      const bDate: any = new Date(b.createdAt);
      const aDate: any = new Date(a.createdAt);
      return bDate - aDate;
    });
  }
}
