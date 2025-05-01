// src/components/Settings.jsx (or wherever it is)
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import the hook
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
  // Get translation function (t) and i18n instance
  const { t, i18n } = useTranslation();

  // Local state for UI elements (like switches) remains
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);

  // Sidebar state listener logic remains the same
  useEffect(() => {
    const sidebarElement = document.querySelector('aside');
    // ... (observer logic as before) ...
    if (!sidebarElement) return;
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const isNowOpen = !sidebarElement.classList.contains('w-[70px]');
                setSidebarOpen(isNowOpen);
            }
        }
    });
    observer.observe(sidebarElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Function to change language globally
  const changeLanguageHandler = (lang: string) => {
    i18n.changeLanguage(lang); // Use i18n instance to change language
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader /> {/* Assumes translation handled via useTranslation internally */}
      <Sidebar />       {/* Assumes translation handled via useTranslation internally */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'pl-[220px]' : 'pl-[70px]'} pt-16 min-h-screen`}>
        <div className="p-6 max-w-[1200px] mx-auto">
          <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
            {/* Use t() function for translations */}
            <h1 className="text-2xl font-bold text-gray-800">{t('settingsTitle')}</h1>
          </div>

          {/* Account Settings */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">{t('accountSettingsTitle')}</h2>
              <div className="mb-6">
                <p className="text-gray-700 mb-4">{t('loggedInAs')} <span className="font-semibold">admin@company.com</span></p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Key size={16} />
                    {t('changePassword')}
                  </Button>
                  <Button variant="destructive" className="flex items-center gap-2">
                    <LogOut size={16} />
                    {t('logout')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Settings */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">{t('systemSettingsTitle')}</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications" className="text-base">{t('notifications')}</Label>
                  <Switch
                    id="notifications"
                    checked={notifications}
                    onCheckedChange={setNotifications}
                    className="data-[state=checked]:bg-whatsapp-primary"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-alerts" className="text-base">{t('emailAlerts')}</Label>
                  <Switch
                    id="email-alerts"
                    checked={emailAlerts}
                    onCheckedChange={setEmailAlerts}
                    className="data-[state=checked]:bg-whatsapp-primary"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="language" className="text-base">{t('language')}</Label>
                  {/* Bind value to i18n.language and use changeLanguageHandler */}
                  <Select value={i18n.language} onValueChange={changeLanguageHandler}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={t('selectLanguagePlaceholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      {/* Values (en, es) match language codes, Text uses t() */}
                      <SelectItem value="en">{t('langEnglish')}</SelectItem>
                      <SelectItem value="es">{t('langSpanish')}</SelectItem>
                      {/* Add other languages if configured in i18n.js */}
                      {/* <SelectItem value="fr">{t('langFrench')}</SelectItem> */}
                      {/* <SelectItem value="de">{t('langGerman')}</SelectItem> */}
                      {/* <SelectItem value="zh">{t('langChinese')}</SelectItem> */}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* WhatsApp Connection Settings */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">{t('whatsappConnectionTitle')}</h2>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <div>
                    <span className="block text-base font-medium mb-1">{t('status')}</span>
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                      {t('connected')}
                    </span>
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <RefreshCw size={16} />
                    {t('reconnectWhatsapp')}
                  </Button>
                </div>
                <Separator />
                <div>
                  <span className="block text-base font-medium mb-1">{t('phoneNumber')}</span>
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Save Button Area */}
          <div className="flex justify-end mt-6 bg-white p-4 rounded-lg shadow-sm">
            <Button className="bg-whatsapp-primary hover:bg-whatsapp-primary/90">
              {t('saveChanges')}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;