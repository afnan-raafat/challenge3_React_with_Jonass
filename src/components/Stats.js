// Footer
export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start Adding To Your List 😊</em>
      </p>
    );

  const numItems = items.length; // دا لكل العناصر سواء عملتها او لا
  const packedItems = items.filter((item) => item.packed).length; /// دا اللى حجزته او خلصته يعنى
  const per = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {per === 100
          ? "You Got everyThing 👌 Ready to go "
          : ` You Have ${numItems} items in your List ,
          and you already packed ${packedItems} (${per} % ).`}
      </em>
    </footer>
  );
}
