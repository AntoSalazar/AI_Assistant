
import React from 'react';
import TopIntentsChart from '@/components/analytics/charts/TopIntentsChart';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const UserIntentsAnalytics = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <h2 className="text-xl font-semibold">User Intents Analytics</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2">
              <div className="h-[400px]">
                <TopIntentsChart />
              </div>
            </div>
            
            <div className="col-span-1 space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium mb-2">Intent Breakdown</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Product inquiries continue to be the leading user intent, followed by order status checks.
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Product Inquiry</span>
                      <span className="text-sm font-semibold">34%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-whatsapp-primary h-2 rounded-full" style={{ width: '34%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Order Status</span>
                      <span className="text-sm font-semibold">28%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Support Query</span>
                      <span className="text-sm font-semibold">22%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '22%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Button variant="outline" className="w-full border-whatsapp-primary text-whatsapp-primary hover:bg-whatsapp-primary/10">
                View Detailed Analysis <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="mt-6 border-t pt-4">
            <h3 className="text-lg font-medium mb-4">Trending Intents</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4">
                  <div className="text-green-600 font-semibold text-sm mb-2">INCREASING</div>
                  <div className="font-medium">Technical Support</div>
                  <div className="text-sm text-gray-600">+12% from last period</div>
                </CardContent>
              </Card>
              
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-4">
                  <div className="text-red-600 font-semibold text-sm mb-2">DECREASING</div>
                  <div className="font-medium">Returns & Refunds</div>
                  <div className="text-sm text-gray-600">-8% from last period</div>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="text-blue-600 font-semibold text-sm mb-2">NEW</div>
                  <div className="font-medium">Warranty Extensions</div>
                  <div className="text-sm text-gray-600">5% of total inquiries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserIntentsAnalytics;
