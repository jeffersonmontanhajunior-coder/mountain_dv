"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function RevenueChart({ data }: { data: { month: string; value: number }[] }) {
  return (
    <div className="rounded-lg border border-border-dark bg-surface-elevated p-8">
      <p className="text-body-sm text-text-secondary">Receita — últimos 6 meses</p>
      <div className="mt-6 h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#2563EB" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} width={40} />
            <Tooltip
              contentStyle={{ background: "#1F2937", border: "1px solid #334155", borderRadius: 12, fontSize: 13 }}
              labelStyle={{ color: "#FFFFFF" }}
            />
            <Area type="monotone" dataKey="value" stroke="#2563EB" strokeWidth={2} fill="url(#revenueGradient)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
