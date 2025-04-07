
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  Download, 
  Filter,
  BarChart3
} from 'lucide-react';

// Types for content insights
type ContentMetric = {
  title: string;
  value: string;
  valueColor: string;
};

type UsedContent = {
  name: string;
  usagePercentage: number;
};

type ContentGap = {
  issue: string;
  frequency: 'High' | 'Medium' | 'Low';
};

type UpdateRecommendation = {
  content: string;
  issue: string;
  lastUpdated: string;
  priority: 'High' | 'Medium' | 'Low';
};

const ContentInsights = () => {
  const [dateRange, setDateRange] = useState('last-30');
  const [contentType, setContentType] = useState('all');

  // Sample data
  const metrics: ContentMetric[] = [
    { title: 'Total Knowledge Items', value: '162', valueColor: 'text-whatsapp-primary' },
    { title: 'Content Usage Rate', value: '76%', valueColor: 'text-whatsapp-primary' },
    { title: 'Avg. Content Age', value: '42 days', valueColor: 'text-whatsapp-primary' },
    { title: 'Content Gaps', value: '12', valueColor: 'text-red-600' },
  ];

  const mostUsedContent: UsedContent[] = [
    { name: 'Return Policy', usagePercentage: 89 },
    { name: 'Wireless Headphones Guide', usagePercentage: 82 },
    { name: 'Shipping Information', usagePercentage: 76 },
    { name: 'Smart Watch Features', usagePercentage: 68 },
    { name: 'Warranty Claims', usagePercentage: 59 },
  ];

  const contentGaps: ContentGap[] = [
    { issue: 'International warranty process', frequency: 'High' },
    { issue: 'Smart Speaker compatibility with third-party apps', frequency: 'High' },
    { issue: 'Premium Smartphone battery replacement', frequency: 'Medium' },
    { issue: 'Wireless Headphones water resistance', frequency: 'Medium' },
  ];

  const updateRecommendations: UpdateRecommendation[] = [
    { 
      content: 'Spring Sale 2025 Promotion Details', 
      issue: 'Outdated pricing information',
      lastUpdated: '45 days ago',
      priority: 'High'
    },
    { 
      content: 'Ultrabook Laptop Specifications', 
      issue: 'New model information missing',
      lastUpdated: '67 days ago',
      priority: 'High'
    },
  ];

  const getFrequencyBadgeColor = (frequency: 'High' | 'Medium' | 'Low') => {
    switch(frequency) {
      case 'High': return 'bg-red-100 text-red-600 hover:bg-red-200';
      case 'Medium': return 'bg-amber-100 text-amber-600 hover:bg-amber-200';
      case 'Low': return 'bg-green-100 text-green-600 hover:bg-green-200';
      default: return 'bg-slate-100 text-slate-600 hover:bg-slate-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Filter Controls */}
      <Card>
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              <div className="w-full sm:w-auto space-y-1.5">
                <label htmlFor="date-range" className="text-sm font-medium">Date Range</label>
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger id="date-range" className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="last-7">Last 7 Days</SelectItem>
                    <SelectItem value="last-30">Last 30 Days</SelectItem>
                    <SelectItem value="last-90">Last 90 Days</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-full sm:w-auto space-y-1.5">
                <label htmlFor="content-type" className="text-sm font-medium">Content Type</label>
                <Select value={contentType} onValueChange={setContentType}>
                  <SelectTrigger id="content-type" className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Content</SelectItem>
                    <SelectItem value="faqs">FAQs</SelectItem>
                    <SelectItem value="products">Product Information</SelectItem>
                    <SelectItem value="policies">Policies</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 w-full sm:w-auto">
              <Button className="bg-whatsapp-primary hover:bg-whatsapp-primary/90 flex-grow sm:flex-grow-0">
                <Filter className="mr-2 h-4 w-4" />
                Apply
              </Button>
              <Button variant="secondary" className="flex-grow sm:flex-grow-0">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-4 sm:p-6">
              <h3 className="font-medium text-sm sm:text-base">{metric.title}</h3>
              <p className={`text-2xl sm:text-3xl font-bold mt-2 ${metric.valueColor}`}>
                {metric.value}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Most Used Content and Content Gaps */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Most Used Content */}
        <Card>
          <CardHeader className="pb-2">
            <h2 className="text-lg font-semibold">Most Used Content</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mostUsedContent.map((content, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{content.name}</span>
                    <span className="text-sm font-medium">{content.usagePercentage}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200">
                    <div 
                      className="h-2 rounded-full bg-whatsapp-primary" 
                      style={{ width: `${content.usagePercentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Content Gaps */}
        <Card>
          <CardHeader className="pb-2">
            <h2 className="text-lg font-semibold">Content Gaps</h2>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Missing Information</TableHead>
                  <TableHead className="text-right">Frequency</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contentGaps.map((gap, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{gap.issue}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className={getFrequencyBadgeColor(gap.frequency)}>
                        {gap.frequency}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Update Recommendations */}
      <Card>
        <CardHeader className="pb-2">
          <h2 className="text-lg font-semibold">Content Update Recommendations</h2>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Content Item</TableHead>
                <TableHead>Issue</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {updateRecommendations.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.content}</TableCell>
                  <TableCell>{item.issue}</TableCell>
                  <TableCell>{item.lastUpdated}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getFrequencyBadgeColor(item.priority)}>
                      {item.priority}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700">Update</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentInsights;
