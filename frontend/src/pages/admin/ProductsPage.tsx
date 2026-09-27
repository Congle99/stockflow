import { useMemo, useState } from "react";
import { Plus } from "lucide-react";

import { EmptyState } from "../../components/common/EmptyState";
import { Pagination } from "../../components/ui/Pagination";
import { Button } from "../../components/ui/Button";
import { Modal } from "../../components/ui/Modal";

import { ProductFilters } from "../../features/products/components/ProductFilters";
import { ProductForm } from "../../features/products/components/ProductForm";
import { ProductTable } from "../../features/products/components/ProductTable";

import { mockProducts } from "../../features/products/mockData";
import type { Product } from "../../features/products/types";

const PRODUCTS_PER_PAGE = 3;

export function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(mockProducts);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [editingProduct, setEditingProduct] = useState<Product | null>(
    null,
  );
  const [deletingProduct, setDeletingProduct] = useState<Product | null>(
  null,
);

  // Get unique categories
  const categories = useMemo(() => {
    return [...new Set(products.map((product) => product.category))];
  }, [products]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const normalizedSearch = search.toLowerCase().trim();

      const matchesSearch =
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.sku.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        !category || product.category === category;

      const matchesStatus =
        !status || product.status === status;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus
      );
    });
  }, [products, search, category, status]);

  // Pagination
  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE,
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE,
  );

  // Reset filters and pagination
  const handleReset = () => {
    setSearch("");
    setCategory("");
    setStatus("");
    setCurrentPage(1);
  };

  // Create product
  const handleCreateProduct = (product: Product) => {
    setProducts((current) => [product, ...current]);

    setCurrentPage(1);
    setIsCreateModalOpen(false);
  };

  // Open edit modal
  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
  };

  // Update product
  const handleUpdateProduct = (updatedProduct: Product) => {
    setProducts((current) =>
      current.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product,
      ),
    );

    setEditingProduct(null);
    
  };
      // Open delete confirmation
const handleDeleteProduct = (product: Product) => {
  setDeletingProduct(product);
};

// Delete product
const handleConfirmDelete = () => {
  if (!deletingProduct) return;

  setProducts((current) =>
    current.filter((product) => product.id !== deletingProduct.id),
  );

  setDeletingProduct(null);
};


  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Products
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage your product catalog.
            </p>
          </div>

          <Button
            onClick={() => setIsCreateModalOpen(true)}
          >
            <Plus size={18} className="mr-2" />
            Add Product
          </Button>
        </div>

        {/* Filters */}
        <ProductFilters
          search={search}
          category={category}
          status={status}
          categories={categories}
          onSearchChange={(value) => {
            setSearch(value);
            setCurrentPage(1);
          }}
          onCategoryChange={(value) => {
            setCategory(value);
            setCurrentPage(1);
          }}
          onStatusChange={(value) => {
            setStatus(value);
            setCurrentPage(1);
          }}
          onReset={handleReset}
        />

        {/* Product results */}
        {paginatedProducts.length > 0 ? (
         <ProductTable
  products={paginatedProducts}
  onEdit={handleEditProduct}
  onDelete={handleDeleteProduct}
/>
        ) : (
          <EmptyState
            title="No products found"
            description="Try adjusting your search or filters to find what you're looking for."
          />
        )}

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Create Product Modal */}
      <Modal
        open={isCreateModalOpen}
        title="Create Product"
        onClose={() => setIsCreateModalOpen(false)}
      >
        <ProductForm
          categories={categories}
          onSubmit={handleCreateProduct}
          onCancel={() => setIsCreateModalOpen(false)}
        />
      </Modal>

      {/* Edit Product Modal */}
      <Modal
        open={editingProduct !== null}
        title="Edit Product"
        onClose={() => setEditingProduct(null)}
      >
        {editingProduct && (
          <ProductForm
            categories={categories}
            initialProduct={editingProduct}
            onSubmit={handleUpdateProduct}
            onCancel={() => setEditingProduct(null)}
          />
        )}
      </Modal>
      {/* Delete Product Modal */}
<Modal
  open={deletingProduct !== null}
  title="Delete Product"
  onClose={() => setDeletingProduct(null)}
>
  {deletingProduct && (
    <div className="space-y-5">
      <p className="text-sm leading-6 text-gray-600">
        Are you sure you want to delete{" "}
        <span className="font-semibold text-gray-900">
          {deletingProduct.name}
        </span>
        ? This action cannot be undone.
      </p>

      <div className="flex justify-end gap-3 border-t border-gray-200 pt-5">
        <Button
          type="button"
          variant="secondary"
          onClick={() => setDeletingProduct(null)}
        >
          Cancel
        </Button>

        <Button
          type="button"
          onClick={handleConfirmDelete}
        >
          Delete Product
        </Button>
      </div>
    </div>
  )}
</Modal>
    </>
  );
}