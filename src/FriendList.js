import Button from "./Button";

const FriendList = ({ friend }) => {
  return (
    <div style={{ display: "flex" }}>
      <img
        src={friend.img}
        alt={friend.name}
        style={{ height: 50, width: 50, marginRight: 20 }}
      />
      <h2>{friend.name}</h2>

      {friend.balance < 0 && (
        <p>
          {friend.name} owes you Rs{Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p>
          You owe {friend.name} Rs {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>Select</Button>
    </div>
  );
};

export default FriendList;
