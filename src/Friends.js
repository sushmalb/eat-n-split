import FriendList from "./FriendList";

const friendsObject = [
  {
    name: "Mary",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    balance: -70,
  },
  {
    name: "Mike",
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
    balance: 60,
  },
  {
    name: "Suzy",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    balance: 0,
  },
];
const Friends = () => {
  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        {friendsObject.map((i) => (
          <li>
            <FriendList friend={i} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Friends;
