import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  // console.log("from UpdateQuantity.jsx:", pizzaId);

  function handleInc() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  function handleDec() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={handleDec}>
        -
      </Button>
      <span className="text-sm font-bold">{currentQuantity}</span>
      <Button type="round" onClick={handleInc}>
        +
      </Button>
    </div>
  );
}

export default UpdateQuantity;
