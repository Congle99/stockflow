import { PackageOpen } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
        <PackageOpen size={24} className="text-gray-400" />
      </div>

      <h3 className="text-sm font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-1 max-w-sm text-sm text-gray-500">
        {description}
      </p>
    </div>
  );
}