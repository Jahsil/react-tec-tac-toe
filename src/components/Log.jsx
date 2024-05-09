export default function Log({ turns }) {
  return (
    <>
      <h2 id="log">These are logs</h2>
      <ol id="log">
        {turns.map((item) => {
          return (
            <li key={`${item.square.row}${item.square.col}`}>
              {item.player} selected {item.square.row}, {item.square.col}
            </li>
          );
        })}
      </ol>
    </>
  );
}
