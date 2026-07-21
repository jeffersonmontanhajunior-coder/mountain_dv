import type { Metadata } from "next";

export const metadata: Metadata = { title: "Status" };

const services = [
  { name: "Site principal", status: "Operacional" },
  { name: "API", status: "Operacional" },
  { name: "Dashboard", status: "Operacional" },
];

export default function StatusPage() {
  return (
    <main className="mx-auto max-w-container-xl px-5 py-24 md:px-20">
      <h1 className="text-h2 font-bold text-text-primary">Status</h1>
      <ul className="mt-8 divide-y divide-border-light">
        {services.map((s) => (
          <li key={s.name} className="flex items-center justify-between py-4">
            <span className="text-body text-text-primary">{s.name}</span>
            <span className="flex items-center gap-2 text-body-sm text-success">
              <span className="h-2 w-2 rounded-full bg-success" />
              {s.status}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
