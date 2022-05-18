export default function countCharacters(value) {
  const logs = document.querySelectorAll(".log-value");
  value.addEventListener("input", () => {
    var x = value.textLength;
    logs[index].innerHTML = x;
  });
}
