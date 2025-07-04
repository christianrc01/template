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
      <Link
        to={href}
        key={href}
        className="!text-blue-600 hover:!underline dark:!text-blue-400"
      >
        {text}
      </Link>
    </td>
  );
}

export default TableLinkCell;
