
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, AlertTriangle, CheckCircle, Clock, Search } from 'lucide-react';
import KnowledgeBaseDonutChart from './charts/KnowledgeBaseDonutChart';

const KnowledgeBaseAnalytics = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <h2 className="text-xl font-semibold">Knowledge Base Analytics</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 text-2xl font-bold">76%</span>
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="text-sm font-medium mt-1">Content Utilized</div>
                    <div className="text-xs text-gray-500 mt-1">+4% from last period</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-red-600 text-2xl font-bold">12</span>
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="text-sm font-medium mt-1">Content Gaps</div>
                    <div className="text-xs text-gray-500 mt-1">3 fewer than last period</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-amber-600 text-2xl font-bold">8%</span>
                      <Clock className="h-6 w-6 text-amber-600" />
                    </div>
                    <div className="text-sm font-medium mt-1">Outdated Content</div>
                    <div className="text-xs text-gray-500 mt-1">-2% from last period</div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader className="pb-2">
                  <h3 className="text-lg font-medium">Knowledge Base Coverage</h3>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Top Performing Content</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Product specifications (98% resolution)
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Shipping policies (95% resolution)
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Return procedures (92% resolution)
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          FAQ - Premium products (90% resolution)
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Content Gap Areas</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm">
                          <AlertTriangle className="h-4 w-4 text-red-600 mr-2" />
                          International warranty terms
                        </li>
                        <li className="flex items-center text-sm">
                          <AlertTriangle className="h-4 w-4 text-red-600 mr-2" />
                          New product compatibility guides
                        </li>
                        <li className="flex items-center text-sm">
                          <AlertTriangle className="h-4 w-4 text-red-600 mr-2" />
                          Advanced troubleshooting steps
                        </li>
                        <li className="flex items-center text-sm">
                          <AlertTriangle className="h-4 w-4 text-red-600 mr-2" />
                          Extended care programs
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="col-span-1">
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <h3 className="text-lg font-medium">Visual Summary</h3>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <KnowledgeBaseDonutChart />
                  </div>
                  
                  <div className="mt-4">
                    <Card className="bg-gray-50">
                      <CardContent className="p-4">
                        <div className="flex items-center">
                          <Search className="h-5 w-5 text-gray-600 mr-3" />
                          <div>
                            <div className="font-medium text-sm">Most Searched</div>
                            <div className="text-xs text-gray-600 mt-1">Wireless Headphones (426 searches)</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4 border-whatsapp-primary text-whatsapp-primary hover:bg-whatsapp-primary/10">
                    Knowledge Base Insights <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KnowledgeBaseAnalytics;
