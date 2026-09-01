import { Card } from "../../components/ui/Card";

const stats = [
  {
    title: "Total Revenue",
    value: "$24,580",
    change: "+12.5%",
  },
  {
    title: "Total Orders",
    value: "328",
    change: "+8.2%",
  },
  {
    title: "Products",
    value: "1,248",
    change: "+4.1%",
  },
  {
    title: "Low Stock",
    value: "18",
    change: "-3.4%",
  },
];

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Dashboard
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Overview of your inventory and sales.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-5">
            <p className="text-sm text-gray-500">
              {stat.title}
            </p>

            <div className="mt-2 flex items-end justify-between">
              <p className="text-2xl font-bold text-gray-900">
                {stat.value}
              </p>

              <span className="text-sm font-medium text-green-600">
                {stat.change}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h3 className="font-semibold text-gray-900">
          Sales Overview
        </h3>

        <div className="mt-6 flex h-64 items-center justify-center rounded-lg bg-gray-50">
          <p className="text-sm text-gray-400">
            Sales chart will be added here
          </p>
        </div>
      </Card>
    </div>
  );
}