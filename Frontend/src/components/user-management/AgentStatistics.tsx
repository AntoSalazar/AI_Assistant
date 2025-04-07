
import React from 'react';
import { Users, UserCheck, PieChart, Clock } from 'lucide-react';

interface AgentStatisticsProps {
  totalAgents: number;
  onlineAgents: number;
  averageLoad: number;
}

const AgentStatistics = ({ totalAgents, onlineAgents, averageLoad }: AgentStatisticsProps) => {
  return (
    <div className="bg-gray-100 p-4 border-t border-gray-200">
      <h2 className="text-lg font-bold text-gray-800 mb-2">Agent Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <Users className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Agents</p>
            <p className="text-lg font-medium">{totalAgents}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="bg-green-100 p-2 rounded-full mr-3">
            <UserCheck className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Currently Online</p>
            <p className="text-lg font-medium">{onlineAgents}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="bg-yellow-100 p-2 rounded-full mr-3">
            <PieChart className="h-5 w-5 text-yellow-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Average Load</p>
            <p className="text-lg font-medium">{Math.round(averageLoad)}%</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="bg-purple-100 p-2 rounded-full mr-3">
            <Clock className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Avg. Response Time</p>
            <p className="text-lg font-medium">3.2m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentStatistics;
