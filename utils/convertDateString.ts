export default function convertDateString(dateString: string): string {
  const [day, month, year] = dateString.split("-").map(Number);
  const formattedDate = `${month} 月 ${day} 日`;
  return formattedDate;
}
