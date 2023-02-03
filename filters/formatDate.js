export default function formatDate(date) {
  const d = new Date(date);
  month == "" + d.getMonth();
  day = "" + d.getDate();
  year = d.getFullYear();
  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) {
    day = "0" + day;
  }
  return [day, month, year].join(".");
}
