export default function formatAdminDBData(data: string) {
  if (data) {
    const dataArray: any = Object.values(data);
    return JSON.parse(dataArray[0]);
  }
  return null;
}
