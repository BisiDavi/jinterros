export function formatDBData(data: any) {
  if (data) {
    const dbDatab = Object.values(data);
    const dataArray: any[] = [];
    dbDatab.map((item: any) => {
      const formattedData: any = Object.values(item);
      const parsedData = JSON.parse(formattedData);
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
