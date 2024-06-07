export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Let's get started by adding items to the list🚀.</em>
      </footer>
    );
  }
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const packedPercent = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${numItems} items on your list, and you already packed ${packedItems} (${packedPercent}%)`}
      </em>
    </footer>
  );
}
