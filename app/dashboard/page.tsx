'use client';

import { Card } from '@/components/ui/card';
import {
  LineChart as Line,
  Line as LineElement,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const lineData = [
  { month: 'Oct', sales: 4000 },
  { month: 'Nov', sales: 3000 },
  { month: 'Dec', sales: 5000 },
  { month: 'Jan', sales: 4500 },
  { month: 'Feb', sales: 6000 },
  { month: 'Mar', sales: 5500 },
];

const barData = [
  { month: 'Oct', users: 100 },
  { month: 'Nov', users: 200 },
  { month: 'Dec', users: 300 },
  { month: 'Jan', users: 400 },
  { month: 'Feb', users: 500 },
  { month: 'Mar', users: 600 },
];

const pieData = [
  { name: 'Product A', value: 400 },
  { name: 'Product B', value: 300 },
  { name: 'Product C', value: 300 },
  { name: 'Product D', value: 200 },
];

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Metrics Summary */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-to-b from-[#1B8DFF] to-[#61AFFF]">
          <h3 className="text-base md:text-lg font-medium">Total Users</h3>
          <p className="text-2xl md:text-3xl font-bold mt-2">2,543</p>
          <p className="text-[12px] md:text-sm text-gray-200 mt-2">+12.5% from last month</p>
        </Card>
        <Card className="p-6 bg-gradient-to-b from-[#3B3B3B] to-[#606060]">
          <h3 className="text-base md:text-lg font-medium">Active Sessions</h3>
          <p className="text-2xl md:text-3xl font-bold mt-2">1,234</p>
          <p className="text-[12px] md:text-sm text-gray-200 mt-2">+5.2% from last hour</p>
        </Card>
        <Card className="p-6 bg-gradient-to-b from-[#3B3B3B] to-[#606060] lg:bg-gradient-to-b lg:from-[#1B8DFF] lg:to-[#61AFFF]">
          <h3 className="text-base md:text-lg font-medium">Sales Revenue</h3>
          <p className="text-2xl md:text-3xl font-bold mt-2">$45,678</p>
          <p className="text-[12px] md:text-sm text-muted-foreground lg:text-gray-200 mt-2">+8.3% from last week</p>
        </Card>
        <Card className="p-6 bg-gradient-to-b from-[#1B8DFF] to-[#61AFFF] lg:bg-gradient-to-b lg:from-[#3B3B3B] lg:to-[#606060]">
          <h3 className="text-base md:text-lg font-medium">Conversion Rate</h3>
          <p className="text-2xl md:text-3xl font-bold mt-2">3.42%</p>
          <p className="text-[12px] md:text-sm text-gray-200 mt-2">+2.1% from last month</p>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Sales Trend</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <Line data={lineData}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="month" />
                {/* <YAxis /> */}
                <Tooltip />
                <LineElement type="monotone" dataKey="sales" stroke="hsl(var(--chart-1))" />
              </Line>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Bar Chart */}
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">User Growth</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                {/* <CartesianGrid strokeDasharray="0 0" /> */}
                <XAxis dataKey="month" />
                {/* <YAxis /> */}
                <Tooltip />
                <Bar dataKey="users" fill="hsl(var(--chart-2))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Pie Chart */}
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Product Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div>
                  <p className="text-sm font-medium">New user registered</p>
                  <p className="text-xs text-muted-foreground">{i} hour ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}