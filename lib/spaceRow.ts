export default function spaceRow(array: any[], index: number) {
  return Number(array.length) - 1 !== index ? "mr-14" : "";
}
