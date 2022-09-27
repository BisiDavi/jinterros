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
      if (parsedData) {
        const date = new Date(parsedData.date);
        dataArray.push({
          ...parsedData,
          authorName: parsedData.author.name,
          date: `${date.toDateString()}, ${date.toLocaleTimeString([], {
            hour12: true,
            hour: "2-digit",
            minute: "2-digit",
          })}`,
        });
      }
    });
    return dataArray;
  }
}

export function formatDBDataSlug(data: string) {
  const formatData = JSON.parse(data);
  const values: string | any = Object.values(formatData)[0];
  return JSON.parse(values);
}
