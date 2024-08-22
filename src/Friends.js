import FriendList from "./FriendList";

const Friends = ({ friends, onSelectFriend }) => {
  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        {friends.map((i) => (
          <li>
            <FriendList friend={i} onSelectFriend={onSelectFriend} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Friends;
