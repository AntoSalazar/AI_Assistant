import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import TopIntentsChart from '@/components/analytics/charts/TopIntentsChart'; // Assuming this handles its own i18n or gets translated data
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Use CardTitle for consistency
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

// --- Data Structure (with translation keys) ---

// Sample data for Intent Breakdown - In a real app, this would likely come from API/props
const intentBreakdownData = [
  { key: 'intentProductInquiry', percentage: 34, color: 'bg-whatsapp-primary' },
  { key: 'intentOrderStatus', percentage: 28, color: 'bg-blue-500' },
  { key: 'intentSupportQuery', percentage: 22, color: 'bg-purple-500' },
  // Add more intents as needed
];

// Sample data for Trending Intents - In a real app, this would likely come from API/props
const trendingIntentsData = [
  {
    typeKey: 'trendIncreasing',
    typeColor: 'text-green-600',
    cardBg: 'bg-green-50',
    cardBorder: 'border-green-200',
    intentKey: 'intentTechnicalSupport', // Re-use existing key if possible
    changeDescKey: 'trendIncreasedBy',
    value: '12%',
  },
  {
    typeKey: 'trendDecreasing',
    typeColor: 'text-red-600',
    cardBg: 'bg-red-50',
    cardBorder: 'border-red-200',
    intentKey: 'intentReturnsRefunds', // New key needed
    changeDescKey: 'trendDecreasedBy',
    value: '8%',
  },
  {
    typeKey: 'trendNew',
    typeColor: 'text-blue-600',
    cardBg: 'bg-blue-50',
    cardBorder: 'border-blue-200',
    intentKey: 'intentWarrantyExtensions', // New key needed
    changeDescKey: 'trendNewShare',
    value: '5%',
  },
];


// --- Helper Component for Intent Progress Bar ---
interface IntentProgressProps {
  intentKey: string;
  percentage: number;
  color: string;
}

const IntentProgressBar: React.FC<IntentProgressProps> = ({ intentKey, percentage, color }) => {
  const { t } = useTranslation();
  const intentName = t(intentKey, intentKey.replace('intent', '')); // Fallback uses key name

  return (
    <div className="space-y-1"> {/* Reduced vertical spacing slightly */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{intentName}</span>
        <span className="text-sm font-semibold">{`${percentage}%`}</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div className={`${color} h-2 rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

// --- Helper Component for Trending Intent Card ---
interface TrendingIntentCardProps {
  typeKey: string;
  typeColor: string;
  cardBg: string;
  cardBorder: string;
  intentKey: string;
  changeDescKey: string;
  value: string;
}

const TrendingIntentCard: React.FC<TrendingIntentCardProps> = ({
  typeKey, typeColor, cardBg, cardBorder, intentKey, changeDescKey, value
}) => {
  const { t } = useTranslation();
  const trendType = t(typeKey, typeKey.replace('trend', '')); // Fallback
  const intentName = t(intentKey, intentKey.replace('intent', '')); // Fallback
  const changeDescription = t(changeDescKey, `Change description (${changeDescKey})`, { value }); // Fallback + Interpolation

  return (
     <Card className={`${cardBg} ${cardBorder}`}>
        <CardContent className="p-4">
          <div className={`${typeColor} font-semibold text-sm mb-2`}>{trendType}</div>
          <div className="font-medium">{intentName}</div>
          <div className="text-sm text-gray-600">{changeDescription}</div>
        </CardContent>
      </Card>
  );
}


// --- Main Component ---
const UserIntentsAnalytics = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          {/* Use translation key */}
          <CardTitle className="text-xl">{t('userIntentsAnalyticsTitle', 'User Intents Analytics')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Chart Section */}
            <div className="col-span-1 md:col-span-2">
              <div className="h-[400px]">
                {/* Assuming TopIntentsChart handles its own i18n or receives translated data */}
                <TopIntentsChart />
              </div>
            </div>

            {/* Intent Breakdown Section */}
            <div className="col-span-1 space-y-4">
              <Card>
                <CardContent className="p-4">
                  {/* Use translation key */}
                  <h3 className="text-lg font-medium mb-2">{t('intentBreakdownTitle', 'Intent Breakdown')}</h3>
                  {/* Use translation key */}
                  <p className="text-sm text-gray-600 mb-4">
                    {t('intentBreakdownDesc', 'Product inquiries continue to be the leading user intent, followed by order status checks.')}
                  </p>
                  <div className="space-y-3">
                     {/* Map over data to render progress bars */}
                     {intentBreakdownData.map((intent) => (
                       <IntentProgressBar
                         key={intent.key}
                         intentKey={intent.key}
                         percentage={intent.percentage}
                         color={intent.color}
                       />
                     ))}
                  </div>
                </CardContent>
              </Card>

              {/* Button */}
              <Button variant="outline" className="w-full border-whatsapp-primary text-whatsapp-primary hover:bg-whatsapp-primary/10">
                {/* Use translation key */}
                {t('viewDetailedAnalysisButton', 'View Detailed Analysis')} <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Trending Intents Section */}
          <div className="mt-6 border-t pt-4">
            {/* Use translation key */}
            <h3 className="text-lg font-medium mb-4">{t('trendingIntentsTitle', 'Trending Intents')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {/* Map over data to render trend cards */}
               {trendingIntentsData.map((trend, index) => (
                 <TrendingIntentCard key={index} {...trend} />
               ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserIntentsAnalytics;