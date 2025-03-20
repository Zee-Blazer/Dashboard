'use client';

import { Card } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  // YAxis,
  // CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

const analyticsData = [
  { date: '2024-10', pageViews: 4000, uniqueVisitors: 2400, bounceRate: 40 },
  { date: '2024-11', pageViews: 3000, uniqueVisitors: 1398, bounceRate: 35 },
  { date: '2024-12', pageViews: 2000, uniqueVisitors: 9800, bounceRate: 42 },
  { date: '2025-01', pageViews: 2780, uniqueVisitors: 3908, bounceRate: 38 },
  { date: '2025-02', pageViews: 1890, uniqueVisitors: 4800, bounceRate: 45 },
  { date: '2025-03', pageViews: 2390, uniqueVisitors: 3800, bounceRate: 32 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium">Total Page Views</h3>
          <p className="text-3xl font-bold mt-2">16,060</p>
          <p className="text-sm text-muted-foreground mt-2">+15% from last month</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-medium">Unique Visitors</h3>
          <p className="text-3xl font-bold mt-2">26,304</p>
          <p className="text-sm text-muted-foreground mt-2">+5% from last month</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-medium">Avg. Bounce Rate</h3>
          <p className="text-3xl font-bold mt-2">38.6%</p>
          <p className="text-sm text-muted-foreground mt-2">-2% from last month</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Traffic Overview</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analyticsData}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="date" />
                {/* <YAxis /> */}
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="pageViews"
                  stackId="1"
                  stroke="hsl(var(--chart-1))"
                  fill="hsl(var(--chart-1))"
                  fillOpacity={0.3}
                />
                <Area
                  type="monotone"
                  dataKey="uniqueVisitors"
                  stackId="2"
                  stroke="hsl(var(--chart-2))"
                  fill="hsl(var(--chart-2))"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Bounce Rate Trend</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analyticsData}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="date" />
                {/* <YAxis /> */}
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="bounceRate"
                  stroke="hsl(var(--chart-3))"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}