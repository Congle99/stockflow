import { useState } from "react";

import type { Product } from "../types";
import { Button } from "../../../components/ui/Button";

interface ProductFormProps {
  categories: string[];
  onSubmit: (product: Product) => void;
  onCancel: () => void;
}

interface FormData {
  name: string;
  sku: string;
  category: string;
  price: string;
  stock: string;
  description: string;
}

const initialForm: FormData = {
  name: "",
  sku: "",
  category: "",
  price: "",
  stock: "",
  description: "",
};

export function ProductForm({
  categories,
  onSubmit,
  onCancel,
}: ProductFormProps) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [error, setError] = useState("");

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim()) {
      setError("Product name is required.");
      return;
    }

    if (!form.sku.trim()) {
      setError("SKU is required.");
      return;
    }

    if (!form.category) {
      setError("Category is required.");
      return;
    }

    const price = Number(form.price);
    const stock = Number(form.stock);

    if (!form.price || Number.isNaN(price) || price < 0) {
      setError("Price must be a valid positive number.");
      return;
    }

    if (
      !form.stock ||
      Number.isNaN(stock) ||
      !Number.isInteger(stock) ||
      stock < 0
    ) {
      setError("Stock must be a valid whole number.");
      return;
    }

    const newProduct: Product = {
      id: crypto.randomUUID(),
      name: form.name.trim(),
      sku: form.sku.trim().toUpperCase(),
      category: form.category,
      price,
      stock,
      status: "active",
      description: form.description.trim(),
    };

    onSubmit(newProduct);
    setForm(initialForm);
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Error */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Product name */}
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          Product name
        </label>

        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Gaming Mouse"
          className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      {/* SKU */}
      <div>
        <label
          htmlFor="sku"
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          SKU
        </label>

        <input
          id="sku"
          name="sku"
          value={form.sku}
          onChange={handleChange}
          placeholder="e.g. GM-001"
          className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      {/* Category */}
      <div>
        <label
          htmlFor="category"
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          Category
        </label>

        <select
          id="category"
          name="category"
          value={form.category}
          onChange={handleChange}
          className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        >
          <option value="">Select category</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Price + Stock */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="price"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Price
          </label>

          <input
            id="price"
            name="price"
            type="number"
            min="0"
            step="0.01"
            value={form.price}
            onChange={handleChange}
            placeholder="0.00"
            className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label
            htmlFor="stock"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Stock
          </label>

          <input
            id="stock"
            name="stock"
            type="number"
            min="0"
            step="1"
            value={form.stock}
            onChange={handleChange}
            placeholder="0"
            className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          Description
        </label>

        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={3}
          placeholder="Product description..."
          className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 border-t border-gray-200 pt-5">
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>

        <Button type="submit">
          Create Product
        </Button>
      </div>
    </form>
  );
}