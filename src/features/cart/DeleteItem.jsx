import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  // console.log("from DeleteItem.jsx:", pizzaId);
  function handleDelete() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <Button onClick={handleDelete} type="small">
      Delete
    </Button>
  );
}

export default DeleteItem;
