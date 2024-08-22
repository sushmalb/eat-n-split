import AddFriend from "./AddFriend";
import Friends from "./Friends";
import Button from "./Button";
import SplitFormBill from "./SplitBillForm";
import { useState } from "react";
function App() {
  const [showForm, setShowForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friends, setFriends] = useState([
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
  ]);

  function handleClick() {
    setShowForm((prev) => !prev);
  }
  function handleAddFriend(newFriend) {
    setFriends((prev) => [...prev, newFriend]);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend(friend);
  }
  return (
    <>
      <Friends friends={friends} onSelectFriend={handleSelectedFriend} />
      <Button onClick={handleClick}>{showForm ? "Close" : "Add Friend"}</Button>
      {showForm && <AddFriend onAddFriend={handleAddFriend} />}

      {selectedFriend && <SplitFormBill friend={selectedFriend} />}
    </>
  );
}

export default App;
