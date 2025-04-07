import React from 'react';
import MetricCard from '@/components/dashboard/MetricCard';
import KnowledgeBaseDonutChart from './charts/KnowledgeBaseDonutChart';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle, Clock, ArrowRight } from 'lucide-react';

const AnalyticsOverview = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Total Conversations" 
          value="14,328" 
          change="+18% from previous period" 
          isPositive={true} 
        />
        <MetricCard 
          title="AI Resolution Rate" 
          value="87.2%" 
          change="+5.4% from previous period" 
          isPositive={true} 
        />
        <MetricCard 
          title="Avg. Response Time" 
          value="1.8s" 
          change="-0.4s from previous period" 
          isPositive={true} 
        />
        <MetricCard 
          title="User Satisfaction" 
          value="94%" 
          change="+2% from previous period" 
          isPositive={true} 
        />
      </div>
      
      {/* Navigation buttons for specific analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Conversation Analytics</h3>
            <p className="text-sm text-gray-500 mb-4">View detailed conversation trends and patterns</p>
            <Button variant="outline" className="w-full border-whatsapp-primary text-whatsapp-primary hover:bg-whatsapp-primary/10">
              View Conversation Details
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">User Intent Analysis</h3>
            <p className="text-sm text-gray-500 mb-4">Explore what your users are asking about</p>
            <Button variant="outline" className="w-full border-whatsapp-primary text-whatsapp-primary hover:bg-whatsapp-primary/10">
              View Intent Details
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
      
      {/* Knowledge Base Performance */}
      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <h3 className="text-lg font-semibold text-gray-700">Knowledge Base Performance</h3>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <KnowledgeBaseDonutChart />
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-green-50 border border-green-100">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <CheckCircle className="text-green-500" size={20} />
                      <span className="text-xs text-green-600">+4% from previous period</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-2xl font-bold text-green-700">76%</div>
                      <div className="text-xs text-green-600">Content Utilized</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-red-50 border border-red-100">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <AlertTriangle className="text-red-500" size={20} />
                      <span className="text-xs text-red-600">3 fewer than last period</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-2xl font-bold text-red-700">12</div>
                      <div className="text-xs text-red-600">Content Gaps</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-amber-50 border border-amber-100">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <Clock className="text-amber-500" size={20} />
                      <span className="text-xs text-amber-600">-2% from previous period</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-2xl font-bold text-amber-700">8%</div>
                      <div className="text-xs text-amber-600">Outdated Content</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="mt-4 bg-slate-50 border border-slate-100">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-3">Recommended Actions</h4>
                  <div className="space-y-3">
                    <div className="flex items-center p-2 bg-red-50 rounded border border-red-100">
                      <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                      <div className="flex-1 text-sm">
                        <div className="font-medium">Address content gaps in International Warranty Terms</div>
                        <div className="text-xs text-gray-500">247 user queries without answers</div>
                      </div>
                      <Button size="sm" variant="outline" className="ml-2 h-8 text-xs">
                        Add Content
                      </Button>
                    </div>
                    <div className="flex items-center p-2 bg-amber-50 rounded border border-amber-100">
                      <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                      <div className="flex-1 text-sm">
                        <div className="font-medium">Update product specifications for Wireless Headphones</div>
                        <div className="text-xs text-gray-500">Last updated 45 days ago</div>
                      </div>
                      <Button size="sm" variant="outline" className="ml-2 h-8 text-xs">
                        Update
                      </Button>
                    </div>
                    <div className="flex items-center p-2 bg-green-50 rounded border border-green-100">
                      <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                      <div className="flex-1 text-sm">
                        <div className="font-medium">Add more details to Premium Smartphone FAQs</div>
                        <div className="text-xs text-gray-500">High usage content needs enhancement</div>
                      </div>
                      <Button size="sm" variant="outline" className="ml-2 h-8 text-xs">
                        Enhance
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsOverview;