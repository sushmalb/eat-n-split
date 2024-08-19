import FriendList from "./FriendList";
import { useState } from "react";

const Friends = ({ friends }) => {
  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        {friends.map((i) => (
          <li>
            <FriendList friend={i} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Friends;
