import type { TableLinkCellProps } from "@/shared/types/IShared";
import { Link } from "react-router-dom";

function TableLinkCell<T>({
  dataItem,
  className,
  getHref,
  getText,
}: TableLinkCellProps<T>) {
  const href = getHref(dataItem);
  const text = getText?.(dataItem) || href || "N/A";

  return (
    <td className={className}>
      <Link to={href} key={href} draggable={false}>
        {text}
      </Link>
    </td>
  );
}

export default TableLinkCell;
