
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const mockData = [
  { date: 'Jan 1', responseTime: 2.4, accuracy: 86, satisfaction: 82 },
  { date: 'Jan 8', responseTime: 2.2, accuracy: 87, satisfaction: 83 },
  { date: 'Jan 15', responseTime: 2.0, accuracy: 89, satisfaction: 85 },
  { date: 'Jan 22', responseTime: 1.9, accuracy: 91, satisfaction: 88 },
  { date: 'Jan 29', responseTime: 1.7, accuracy: 93, satisfaction: 90 },
  { date: 'Feb 5', responseTime: 1.5, accuracy: 94, satisfaction: 92 },
  { date: 'Feb 12', responseTime: 1.4, accuracy: 95, satisfaction: 94 },
];

const LLMPerformanceMetrics = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium text-gray-500">Average Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1.4s</div>
            <p className="text-sm text-green-600">↓ 12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium text-gray-500">Accuracy Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">95%</div>
            <p className="text-sm text-green-600">↑ 2% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium text-gray-500">User Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">94%</div>
            <p className="text-sm text-green-600">↑ 4% from last month</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Performance Trends</CardTitle>
            <Select defaultValue="7d">
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="1m">Last month</SelectItem>
                <SelectItem value="3m">Last 3 months</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={mockData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="responseTime"
                  name="Response Time (s)"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line 
                  yAxisId="right" 
                  type="monotone" 
                  dataKey="accuracy" 
                  name="Accuracy (%)" 
                  stroke="#82ca9d" 
                />
                <Line 
                  yAxisId="right" 
                  type="monotone" 
                  dataKey="satisfaction" 
                  name="Satisfaction (%)" 
                  stroke="#ffc658" 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Most Common User Intents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Product Information</span>
                <div className="flex items-center">
                  <div className="w-40 bg-slate-200 rounded-full h-2.5 mr-2">
                    <div className="bg-whatsapp-primary h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <span className="text-sm">65%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Order Status</span>
                <div className="flex items-center">
                  <div className="w-40 bg-slate-200 rounded-full h-2.5 mr-2">
                    <div className="bg-whatsapp-primary h-2.5 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                  <span className="text-sm">42%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Technical Support</span>
                <div className="flex items-center">
                  <div className="w-40 bg-slate-200 rounded-full h-2.5 mr-2">
                    <div className="bg-whatsapp-primary h-2.5 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                  <span className="text-sm">28%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Complaint Handling</span>
                <div className="flex items-center">
                  <div className="w-40 bg-slate-200 rounded-full h-2.5 mr-2">
                    <div className="bg-whatsapp-primary h-2.5 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <span className="text-sm">15%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Top Error Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Incorrect Information</span>
                <div className="flex items-center">
                  <div className="w-40 bg-slate-200 rounded-full h-2.5 mr-2">
                    <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '38%' }}></div>
                  </div>
                  <span className="text-sm">38%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Misunderstood Intent</span>
                <div className="flex items-center">
                  <div className="w-40 bg-slate-200 rounded-full h-2.5 mr-2">
                    <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '26%' }}></div>
                  </div>
                  <span className="text-sm">26%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Missing Context</span>
                <div className="flex items-center">
                  <div className="w-40 bg-slate-200 rounded-full h-2.5 mr-2">
                    <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <span className="text-sm">20%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Hallucinations</span>
                <div className="flex items-center">
                  <div className="w-40 bg-slate-200 rounded-full h-2.5 mr-2">
                    <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '16%' }}></div>
                  </div>
                  <span className="text-sm">16%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LLMPerformanceMetrics;
