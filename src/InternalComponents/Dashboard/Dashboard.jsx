import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { PieChart, Pie } from "recharts";
import {
  Users,
  Clock,
  CheckCircle,
  XCircle,
  FileText,
  AlertTriangle,
  Calendar,
  CreditCard,
  Bell,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const monthlyData = [
  { month: "Jan", registered: 2100, approved: 1600 },
  { month: "Feb", registered: 1800, approved: 1400 },
  { month: "Mar", registered: 2700, approved: 2200 },
  { month: "Apr", registered: 2500, approved: 2000 },
  { month: "May", registered: 3100, approved: 2500 },
  { month: "Jun", registered: 2600, approved: 2100 },
  { month: "Jul", registered: 2400, approved: 1900 },
  { month: "Aug", registered: 2800, approved: 2300 },
  { month: "Sep", registered: 3400, approved: 2800 },
  { month: "Oct", registered: 2700, approved: 2200 },
  { month: "Nov", registered: 2500, approved: 2000 },
  { month: "Dec", registered: 2100, approved: 1700 },
];

const programData = [
  { name: "40/60 Condo", value: 42, color: "var(--primary-700)" },
  { name: "20/80 Condo", value: 26, color: "var(--primary-600)" },
  { name: "Cooperative", value: 15, color: "var(--primary-500)" },
  { name: "Social Housing", value: 9, color: "var(--primary-400)" },
  { name: "Rental", value: 6, color: "var(--primary-300)" },
];

const subCities = [
  { name: "Bole", count: "7.8k", pct: 96 },
  { name: "Kirkos", count: "6.5k", pct: 84 },
  { name: "Yeka", count: "5.9k", pct: 76 },
  { name: "Arada", count: "5.2k", pct: 67 },
  { name: "Gulele", count: "4.9k", pct: 63 },
  { name: "Lideta", count: "4.3k", pct: 56 },
  { name: "Nifas Silk", count: "3.7k", pct: 48 },
  { name: "Kolfe", count: "2.9k", pct: 38 },
];

const activities = [
  {
    time: "09:14",
    name: "Dawit Tesfaye",
    status: "Approved",
    statusColor: "var(--success-600)",
    desc: "APP-2023-000041 registration",
  },
  {
    time: "10:22",
    name: "Mekdes Alemu",
    status: "Reviewed",
    statusColor: "var(--info-600)",
    desc: "Update request for APP-2023-000012",
  },
  {
    time: "11:05",
    name: "Yonas Girma",
    status: "Submitted",
    statusColor: "var(--warning-600)",
    desc: "New application APP-2023-000589",
  },
  {
    time: "11:47",
    name: "Tigist Bekele",
    status: "Approved",
    statusColor: "var(--success-600)",
    desc: "APP-2023-000203 approved by admin",
  },
  {
    time: "12:30",
    name: "Selam Haile",
    status: "Rejected",
    statusColor: "var(--destructive-600)",
    desc: "APP-2023-000077 missing documents",
  },
  {
    time: "13:15",
    name: "Abebe Worku",
    status: "Reviewed",
    statusColor: "var(--info-600)",
    desc: "Lottery draw for Campaign #3 opened",
  },
  {
    time: "14:02",
    name: "Hana Mengistu",
    status: "Pending",
    statusColor: "var(--warning-600)",
    desc: "Payment ETB 3,200 for APP-2023-000441",
  },
];

// ─── Stat Cards Data Arrays ─────────────────────────────────────────────────

const statCardsRow1 = [
  {
    id: 1,
    iconBg: "bg-primary-50 dark:bg-primary-950/30",
    icon: Users,
    iconColor: "var(--primary-600)",
    value: "48,320",
    label: "Total Applicants",
    sub: "+2,140 this month",
    subClass: "text-success-600",
  },
  {
    id: 2,
    iconBg: "bg-warning-50 dark:bg-warning-950/30",
    icon: Clock,
    iconColor: "var(--warning-600)",
    value: "3,214",
    label: "Pending Approval",
    sub: "+186 today",
    subClass: "text-warning-600",
  },
  {
    id: 3,
    iconBg: "bg-success-50 dark:bg-success-950/30",
    icon: CheckCircle,
    iconColor: "var(--success-600)",
    value: "38,750",
    label: "Approved",
    sub: "80.2% approval rate",
    subClass: "text-success-600",
  },
  {
    id: 4,
    iconBg: "bg-destructive-50 dark:bg-destructive-950/30",
    icon: XCircle,
    iconColor: "var(--destructive-600)",
    value: "6,356",
    label: "Rejected",
    sub: "13.1% rejection rate",
    subClass: "text-destructive-600",
  },
];

const statCardsRow2 = [
  {
    id: 5,
    iconBg: "bg-primary-50 dark:bg-primary-950/30",
    icon: FileText,
    iconColor: "var(--primary-600)",
    value: "412",
    label: "Update Requests",
    sub: "38 in review",
    subClass: "text-primary-600",
  },
  {
    id: 6,
    iconBg: "bg-warning-50 dark:bg-warning-950/30",
    icon: AlertTriangle,
    iconColor: "var(--warning-600)",
    value: "87",
    label: "Missing Claims",
    sub: "12 pending review",
    subClass: "text-warning-600",
  },
  {
    id: 7,
    iconBg: "bg-info-50 dark:bg-info-950/30",
    icon: Calendar,
    iconColor: "var(--info-600)",
    value: "3",
    label: "Active Campaigns",
    sub: "2 open for registration",
    subClass: "text-info-600",
  },
  {
    id: 8,
    iconBg: "bg-primary-50 dark:bg-primary-950/30",
    icon: CreditCard,
    iconColor: "var(--primary-600)",
    value: "ETB 12.4M",
    label: "Payments Processed",
    sub: "This month",
    subClass: "text-primary-600",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({
  iconBg,
  icon: Icon,
  iconColor,
  value,
  label,
  sub,
  subClass = "text-success-600",
}) {
  return (
    <div className="bg-card rounded-2xl p-5 flex items-start gap-3.5 shadow-sm hover:shadow-md transition-shadow duration-200 border border-border">
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}
      >
        <Icon size={20} style={{ color: iconColor }} />
      </div>
      <div>
        <div className="text-2xl font-bold text-foreground leading-tight">
          {value}
        </div>
        <div className="text-sm text-muted-foreground mt-0.5">{label}</div>
        {/* {sub && (
          <div className={`text-xs font-medium mt-1 ${subClass}`}>{sub}</div>
        )} */}
      </div>
    </div>
  );
}

function ChartCard({ title, children, className = "" }) {
  return (
    <div
      className={`bg-card rounded-2xl p-6 shadow-sm border border-border ${className}`}
    >
      <h2 className="text-sm font-semibold text-foreground mb-4">{title}</h2>
      {children}
    </div>
  );
}

// Custom tooltip for bar chart
function BarTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-xl shadow-lg px-3 py-2 text-xs">
      <p className="font-semibold text-foreground mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.fill }}>
          {p.name === "registered" ? "Registered" : "Approved"}:{" "}
          {p.value.toLocaleString()}
        </p>
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Dashboard() {
  return (
    <div className="bg-neutral-50 font-sans flex flex-col">
      {/* Page Content */}
      <div className="p-6 flex-1 overflow-y-auto">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Housing Lottery Management System — Overview
          </p>
        </div>

        {/* Stat Cards Row 1 - Looped */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {statCardsRow1.map((card) => (
            <StatCard
              key={card.id}
              iconBg={card.iconBg}
              icon={card.icon}
              iconColor={card.iconColor}
              value={card.value}
              label={card.label}
              sub={card.sub}
              subClass={card.subClass}
            />
          ))}
        </div>

        {/* Stat Cards Row 2 - Looped */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {statCardsRow2.map((card) => (
            <StatCard
              key={card.id}
              iconBg={card.iconBg}
              icon={card.icon}
              iconColor={card.iconColor}
              value={card.value}
              label={card.label}
              sub={card.sub}
              subClass={card.subClass}
            />
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* Bar Chart */}
          <ChartCard
            title="Monthly Registrations vs. Approvals"
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-3 h-3 rounded-sm bg-primary-300" />
                Registered
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-3 h-3 rounded-sm bg-primary-800 dark:bg-primary-600" />
                Approved
              </span>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={monthlyData} barCategoryGap="30%" barGap={3}>
                <CartesianGrid vertical={false} stroke="var(--border)" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                  axisLine={false}
                  tickLine={false}
                  width={36}
                />
                <Tooltip
                  content={<BarTooltip />}
                  cursor={{ fill: "var(--muted)" }}
                />
                <Bar
                  dataKey="registered"
                  fill="var(--primary-300)"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="approved"
                  fill="var(--primary-800)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Donut Chart */}
          <ChartCard title="Program Distribution">
            <div className="flex flex-col items-center">
              <ResponsiveContainer width="100%" height={170}>
                <PieChart>
                  <Pie
                    data={programData}
                    cx="50%"
                    cy="50%"
                    innerRadius={52}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {programData.map((entry) => (
                      <Cell
                        key={entry.name}
                        fill={entry.color}
                        stroke="var(--card)"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name) => [`${value}%`, name]}
                    contentStyle={{
                      borderRadius: 10,
                      fontSize: 12,
                      backgroundColor: "var(--card)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-2 w-full space-y-2">
                {programData.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-between text-xs text-muted-foreground"
                  >
                    <span className="flex items-center gap-1.5">
                      <span
                        className="inline-block w-2.5 h-2.5 rounded-full"
                        style={{ background: p.color }}
                      />
                      {p.name}
                    </span>
                    <span className="font-semibold text-foreground">
                      {p.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ChartCard>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Sub-City Bars */}
          <ChartCard title="Applicants by Sub-City" className="lg:col-span-2">
            <div className="space-y-3">
              {subCities.map((city) => (
                <div
                  key={city.name}
                  className="flex items-center gap-3 text-xs text-muted-foreground"
                >
                  <span className="w-16 shrink-0">{city.name}</span>
                  <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary-600"
                      style={{ width: `${city.pct}%` }}
                    />
                  </div>
                  <span className="font-mono text-foreground w-8 text-right">
                    {city.count}
                  </span>
                </div>
              ))}
            </div>
          </ChartCard>

          {/* Recent Activity */}
          <ChartCard title="Recent Activity">
            <div className="space-y-4">
              {activities.map((a, i) => (
                <div key={i} className="flex gap-3">
                  <div className="text-xs text-muted-foreground font-mono w-10 shrink-0 pt-0.5">
                    {a.time}
                  </div>
                  <div className="text-xs text-muted-foreground leading-snug">
                    <span className="font-semibold text-foreground">
                      {a.name}{" "}
                    </span>
                    <span style={{ color: a.statusColor }}>{a.status} </span>
                    {a.desc}
                  </div>
                </div>
              ))}
            </div>
          </ChartCard>
        </div>
      </div>
    </div>
  );
}
