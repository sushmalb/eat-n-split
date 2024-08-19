import { useState } from "react";
import Button from "./Button";

const AddFriend = ({ showform, onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatarcc/48");

  function handleSubmit(e) {
    e.preventDefault();

    const newFriend = {
      name,
      image,
      balance: 0,
    };
    console.log(newFriend);
    setName("");
    onAddFriend(newFriend);
  }

  return (
    <>
      <form className="form" style={{ marginTop: 20 }} onSubmit={handleSubmit}>
        <label>Friend Name :</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Image URL:</label>
        <input type="text" value={image} />

        <Button>Add</Button>
      </form>
    </>
  );
};
export default AddFriend;
