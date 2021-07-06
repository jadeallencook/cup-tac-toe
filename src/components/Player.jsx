import './Player.css';

function Player({
  color,
  name,
  cups,
  isPlayersTurn,
  selectedSize,
  setSelectedSize,
}) {
  const sizes = ['s', 'm', 'l', 'x'];
  return (
    <div
      className='Player'
      style={{
        borderColor: isPlayersTurn ? color : '#666',
      }}
    >
      <span>{name}</span>
      <ul>
        {sizes.map((size, index) => (
          <li
            key={`player-${+isPlayersTurn}-${size}`}
            onClick={() => {
              if (isPlayersTurn) {
                setSelectedSize(index);
              }
            }}
          >
            <div
              className={`${size}-cup cup`}
              style={{
                borderColor:
                  isPlayersTurn && selectedSize === index ? '#FFF' : '#3333',
              }}
            >
              <div
                style={{
                  backgroundColor: color,
                }}
              ></div>
            </div>
            <div>{cups[index]}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Player;
