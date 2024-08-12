import { useState } from "react";
import Button from "./Button";

const AddFriend = ({ showform }) => {
  return (
    <>
      <form className="form" style={{ marginTop: 20 }}>
        <label>Friend Name :</label>
        <input type="text" />
        <label>Image URL:</label>
        <input type="text" />

        <Button>Add</Button>
      </form>
    </>
  );
};
export default AddFriend;
