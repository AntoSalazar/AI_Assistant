import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { Users, UserCheck, PieChart, Clock } from 'lucide-react';

interface AgentStatisticsProps {
  totalAgents: number; // Data - Not translated
  onlineAgents: number; // Data - Not translated
  averageLoad: number; // Data - Not translated (calculation result)
}

const AgentStatistics = ({ totalAgents, onlineAgents, averageLoad }: AgentStatisticsProps) => {
  const { t } = useTranslation(); // Initialize hook

  // Structure for stats for easier mapping (optional, but clean)
  const stats = [
    { id: 'total', icon: Users, iconBg: 'bg-blue-100', iconColor: 'text-blue-600', labelKey: 'agentStatsLabelTotal', labelFallback: 'Total Agents', value: totalAgents },
    { id: 'online', icon: UserCheck, iconBg: 'bg-green-100', iconColor: 'text-green-600', labelKey: 'agentStatsLabelOnline', labelFallback: 'Currently Online', value: onlineAgents },
    { id: 'load', icon: PieChart, iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600', labelKey: 'agentStatsLabelAvgLoad', labelFallback: 'Average Load', value: `${Math.round(averageLoad)}%` },
    // Hardcoded Avg Response Time for this example
    { id: 'response', icon: Clock, iconBg: 'bg-purple-100', iconColor: 'text-purple-600', labelKey: 'agentStatsLabelAvgResponse', labelFallback: 'Avg. Response Time', value: '3.2m' },
  ];


  return (
    // Styles remain unchanged
    <div className="bg-gray-100 p-4 border-t border-gray-200">
      {/* Title - UI Text - Translated */}
      <h2 className="text-lg font-bold text-gray-800 mb-2">
        {t('agentStatsTitle', 'Agent Statistics')}
      </h2>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
         {/* Map over structured stats data */}
        {stats.map(stat => (
            <div key={stat.id} className="flex items-center">
              {/* Icon and Background - Unchanged */}
              <div className={`${stat.iconBg} p-2 rounded-full mr-3`}>
                <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
              </div>
              <div>
                 {/* Label - UI Text - Translated */}
                <p className="text-sm text-gray-500">
                  {t(stat.labelKey, stat.labelFallback)}
                </p>
                 {/* Value - Data - Not Translated */}
                <p className="text-lg font-medium">{stat.value}</p>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default AgentStatistics;