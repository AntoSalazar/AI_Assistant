
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { LogOut, Key, RefreshCw } from 'lucide-react';

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [language, setLanguage] = useState('english');

  // Listen for sidebar state changes
  React.useEffect(() => {
    const sidebarElement = document.querySelector('aside');
    if (!sidebarElement) return;

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          // Check if sidebar has collapsed class
          const isNowOpen = !sidebarElement.classList.contains('w-[70px]');
          setSidebarOpen(isNowOpen);
        }
      }
    });

    observer.observe(sidebarElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader />
      <Sidebar />
      <main className={`transition-all duration-300 ${sidebarOpen ? 'pl-[220px]' : 'pl-[70px]'} pt-16 min-h-screen`}>
        <div className="p-6 max-w-[1200px] mx-auto">
          <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
          </div>
          
          {/* Account Settings */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Account Settings</h2>
              <div className="mb-6">
                <p className="text-gray-700 mb-4">Logged in as: <span className="font-semibold">admin@company.com</span></p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Key size={16} />
                    Change Password
                  </Button>
                  <Button variant="destructive" className="flex items-center gap-2">
                    <LogOut size={16} />
                    Logout
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* System Settings */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">System Settings</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications" className="text-base">Notifications</Label>
                  <Switch 
                    id="notifications" 
                    checked={notifications} 
                    onCheckedChange={setNotifications} 
                    className="data-[state=checked]:bg-whatsapp-primary" 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-alerts" className="text-base">Email Alerts</Label>
                  <Switch 
                    id="email-alerts" 
                    checked={emailAlerts} 
                    onCheckedChange={setEmailAlerts}
                    className="data-[state=checked]:bg-whatsapp-primary" 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="language" className="text-base">Language</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="german">German</SelectItem>
                      <SelectItem value="chinese">Chinese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* WhatsApp Connection Settings */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">WhatsApp Connection</h2>
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <div>
                    <span className="block text-base font-medium mb-1">Status:</span>
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                      Connected
                    </span>
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <RefreshCw size={16} />
                    Reconnect WhatsApp
                  </Button>
                </div>
                
                <Separator />
                
                <div>
                  <span className="block text-base font-medium mb-1">Phone Number:</span>
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Save Button Area */}
          <div className="flex justify-end mt-6 bg-white p-4 rounded-lg shadow-sm">
            <Button className="bg-whatsapp-primary hover:bg-whatsapp-primary/90">
              Save Changes
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
