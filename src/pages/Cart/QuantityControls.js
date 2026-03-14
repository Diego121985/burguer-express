import { Controls } from "./Cart.styles";
import { Plus, Minus, Trash2 } from "lucide-react";

export default function QuantityControls({ quantity, onIncrease, onDecrease, onRemove }) {
  return (
    <Controls>
      <button onClick={onDecrease}>
        <Minus size={16} />
      </button>

      <span>{quantity}</span>

      <button onClick={onIncrease}>
        <Plus size={16} />
      </button>

      {onRemove && (
        <button className="remove" onClick={onRemove}>
          <Trash2 size={16} />
        </button>
      )}
    </Controls>
  );
}
