import Button from "./Button";
const SplitFormBill = ({ friend }) => {
  return (
    <form className="form" style={{ marginTop: 20 }}>
      <h3>split bill with {friend.name}</h3>
      <label>Bill value:</label>
      <input type="text" />

      <label>Your Expense:</label>
      <input type="text" />

      <label>Mike`s expense:</label>
      <input type="text" />

      <label>Who is paying the bill?</label>
      <select>
        <option>You</option>
        <option>X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};

export default SplitFormBill;
