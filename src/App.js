import AddFriend from "./AddFriend";
import Friends from "./Friends";
import Button from "./Button";
import SplitFormBill from "./SplitBillForm";
import { useState } from "react";
function App() {
  const [showForm, setShowForm] = useState(false);
  function handleClick() {
    setShowForm((prev) => !prev);
    console.log("Button clicked. showForm is now:", !showForm);
  }
  return (
    <>
      <Friends />
      <Button onClick={handleClick}>{showForm ? "Close" : "Add Friend"}</Button>
      {showForm && <AddFriend />}
      {console.log(showForm)}
      <SplitFormBill />
    </>
  );
}

export default App;
