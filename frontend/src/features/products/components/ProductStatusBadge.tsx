import type { ProductStatus } from "../types";

interface ProductStatusBadgeProps {
  status: ProductStatus;
}

const statusStyles: Record<ProductStatus, string> = {
  active: "bg-green-50 text-green-700 ring-1 ring-green-600/20",
  inactive: "bg-gray-100 text-gray-600 ring-1 ring-gray-500/20",
};

const statusLabels: Record<ProductStatus, string> = {
  active: "Active",
  inactive: "Inactive",
};

export function ProductStatusBadge({
  status,
}: ProductStatusBadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        rounded-full
        px-2.5 py-1
        text-xs font-medium
        ${statusStyles[status]}
      `}
    >
      {statusLabels[status]}
    </span>
  );
}