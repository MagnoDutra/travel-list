function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Que tal começar adicionando alguns itens em sua lista?</em>
      </p>
    );

  const itemsLength = items.length;
  const itemsPacked = items.reduce(
    (acc, curr) => (curr.packed ? acc + 1 : acc),
    0
  );
  const percentage = Math.floor((itemsPacked / itemsLength) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Tudo pronto! Já podemos ir. ✈"
          : `👝 Você tem ${itemsLength} itens na sua lista e você ja empacotou
        ${itemsPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
