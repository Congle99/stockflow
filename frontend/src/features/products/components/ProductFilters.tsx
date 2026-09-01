import { Search, X } from "lucide-react";

interface ProductFiltersProps {
  search: string;
  category: string;
  status: string;
  categories: string[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onReset: () => void;
}

export function ProductFilters({
  search,
  category,
  status,
  categories,
  onSearchChange,
  onCategoryChange,
  onStatusChange,
  onReset,
}: ProductFiltersProps) {
  const hasFilters = search || category || status;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex flex-col gap-3 lg:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search products..."
            className="
              h-10 w-full rounded-lg
              border border-gray-300
              bg-white
              pl-10 pr-4
              text-sm text-gray-900
              outline-none
              transition
              placeholder:text-gray-400
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/20
            "
          />
        </div>

        {/* Category */}
        <select
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="
            h-10 rounded-lg
            border border-gray-300
            bg-white
            px-3
            text-sm text-gray-700
            outline-none
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20
          "
        >
          <option value="">All categories</option>

          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* Status */}
        <select
          value={status}
          onChange={(event) => onStatusChange(event.target.value)}
          className="
            h-10 rounded-lg
            border border-gray-300
            bg-white
            px-3
            text-sm text-gray-700
            outline-none
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20
          "
        >
          <option value="">All statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        {/* Reset */}
        {hasFilters && (
          <button
            type="button"
            onClick={onReset}
            className="
              inline-flex h-10
              items-center justify-center
              gap-2
              rounded-lg
              px-3
              text-sm font-medium
              text-gray-600
              hover:bg-gray-100
            "
          >
            <X size={16} />
            Reset
          </button>
        )}
      </div>
    </div>
  );
}