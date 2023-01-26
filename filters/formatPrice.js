export default function formatPrice(value) {
  const number = new Intl.NumberFormat().format(value);
  const num = number.toString().replace(",", " ");
  return num;
}
