export default function formatAdminDBData(data: string) {
  if (data) {
    const parsedData = JSON.parse(data);
    const dataArray: any = Object.values(parsedData);
    return JSON.parse(dataArray[0]);
  }
  return null;
}
