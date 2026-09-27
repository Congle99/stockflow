import type { Product } from "../types";
import { ProductStatusBadge } from "./ProductStatusBadge";

interface ProductTableProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

export function ProductTable({
  products,
  onEdit,
  onDelete,
}: ProductTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                Product
              </th>

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                SKU
              </th>

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                Category
              </th>

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                Price
              </th>

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                Stock
              </th>

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                Status
              </th>

              <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr
                key={product.id}
                className="transition-colors hover:bg-gray-50"
              >
                <td className="whitespace-nowrap px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.name}
                    </p>

                    {product.description && (
                      <p className="mt-1 max-w-xs truncate text-xs text-gray-500">
                        {product.description}
                      </p>
                    )}
                  </div>
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                  {product.sku}
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                  {product.category}
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  ${product.price.toFixed(2)}
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={
                      product.stock <= 10
                        ? "text-sm font-semibold text-red-600"
                        : "text-sm font-medium text-gray-900"
                    }
                  >
                    {product.stock}
                  </span>
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  <ProductStatusBadge status={product.status} />
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-right">

 

                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => onEdit(product)}
                      className="text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => onDelete(product)}
                      className="text-sm font-medium text-red-600 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}