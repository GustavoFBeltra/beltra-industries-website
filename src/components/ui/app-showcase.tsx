"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ImageComparison } from "@/components/ui/image-comparison";
import { Monitor, Smartphone, ChefHat, Globe, LayoutDashboard, ClipboardList } from "lucide-react";

interface AppTab {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  lightScreenshot: string;
  darkScreenshot: string;
  features?: string[];
  isMobile?: boolean;
}

interface AppShowcaseProps {
  apps: AppTab[];
  className?: string;
}

function AppShowcase({ apps, className = "" }: AppShowcaseProps) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <Tabs defaultValue={apps[0]?.id} className="w-full">
        {/* Tab Navigation */}
        <TabsList
          className={`w-full h-auto flex flex-wrap justify-center gap-2 p-2 rounded-xl ${
            isDark
              ? "bg-zinc-900/50 border border-zinc-800"
              : "bg-zinc-100 border border-zinc-200"
          }`}
        >
          {apps.map((app) => (
            <TabsTrigger
              key={app.id}
              value={app.id}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
                isDark
                  ? "data-[state=active]:bg-white data-[state=active]:text-zinc-900 text-zinc-400 hover:text-white"
                  : "data-[state=active]:bg-zinc-900 data-[state=active]:text-white text-zinc-600 hover:text-black"
              }`}
            >
              {app.icon}
              <span className="hidden sm:inline">{app.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Tab Content */}
        {apps.map((app) => (
          <TabsContent key={app.id} value={app.id} className="mt-6">
            <div
              className={`rounded-2xl p-6 ${
                isDark
                  ? "bg-zinc-900/50 border border-zinc-800"
                  : "bg-zinc-50 border border-zinc-200"
              }`}
            >
              {/* App Header */}
              <div className="text-center mb-6">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  {app.name}
                </h3>
                <p
                  className={`text-sm max-w-2xl mx-auto ${
                    isDark ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  {app.description}
                </p>
              </div>

              {/* Image Comparison */}
              <div className={`mx-auto ${app.isMobile ? "max-w-xs" : "max-w-4xl"}`}>
                {/* Legend - hidden on mobile since toggle button shows mode */}
                <div className="mb-4 hidden md:flex justify-center gap-4 text-sm">
                  <span
                    className={`flex items-center gap-2 ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full bg-zinc-800"></span>
                    Dark Mode
                  </span>
                  <span
                    className={`flex items-center gap-2 ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full bg-white border border-zinc-300"></span>
                    Light Mode
                  </span>
                </div>
                <ImageComparison
                  beforeImage={app.darkScreenshot}
                  afterImage={app.lightScreenshot}
                  beforeAlt={`${app.name} Dark Mode`}
                  afterAlt={`${app.name} Light Mode`}
                  isMobile={app.isMobile}
                />
              </div>

              {/* Features List */}
              {app.features && app.features.length > 0 && (
                <div className="mt-6">
                  <h4
                    className={`text-sm font-medium mb-3 ${
                      isDark ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {app.features.map((feature, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 text-xs rounded-full ${
                          isDark
                            ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
                            : "bg-white text-zinc-700 border border-zinc-300"
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

// Default TAB apps configuration
const defaultTabApps: AppTab[] = [
  {
    id: "pos",
    name: "Point of Sales",
    icon: <Monitor className="w-4 h-4" />,
    description: "A high-performance Electron desktop application designed for real-time restaurant order management, optimized for speed during peak service hours with offline-first reliability.",
    lightScreenshot: "/images/platforms/tab/screenshots/desktop/pos-light.png",
    darkScreenshot: "/images/platforms/tab/screenshots/desktop/pos-dark.png",
    features: [
      "FastPOS Mode",
      "Multi-Tier Authentication",
      "Smart Table Management",
      "Modifier Wizard",
      "Integrated Tip Entry",
      "Offline-First Operation",
      "Built-in Time Clock",
      "Receipt Printing",
    ],
  },
  {
    id: "manager",
    name: "Manager App",
    icon: <LayoutDashboard className="w-4 h-4" />,
    description: "A dedicated management workstation for off-POS administrative tasks, giving managers the tools they need without interrupting active service terminals.",
    lightScreenshot: "/images/platforms/tab/screenshots/desktop/manager-light.png",
    darkScreenshot: "/images/platforms/tab/screenshots/desktop/manager-dark.png",
    features: [
      "Staff Role Management",
      "Bar Station Configuration",
      "Restaurant Fees System",
      "Employee Scheduling",
      "Sales & Labor Analytics",
      "AI-Powered Assistant",
      "Audit Trail",
    ],
  },
  {
    id: "kitchen",
    name: "Kitchen View",
    icon: <ChefHat className="w-4 h-4" />,
    description: "A purpose-built display system for kitchen staff that organizes incoming orders by station with clear timing and priority indicators.",
    lightScreenshot: "/images/platforms/tab/screenshots/desktop/kitchen-light.png",
    darkScreenshot: "/images/platforms/tab/screenshots/desktop/kitchen-dark.png",
    features: [
      "Station-Based Organization",
      "Side Count Tracking",
      "Expo Management",
      "Priority & Timing Indicators",
      "Seating Order Optimization",
      "Color-Coded Status",
      "Touch-Optimized Interface",
    ],
  },
  {
    id: "website",
    name: "Marketing Website",
    icon: <Globe className="w-4 h-4" />,
    description: "The public-facing website that showcases TAB's features, handles new restaurant onboarding, and provides account access for owners.",
    lightScreenshot: "/images/platforms/tab/screenshots/desktop/website-light.png",
    darkScreenshot: "/images/platforms/tab/screenshots/desktop/website-dark.png",
    features: [
      "Feature Showcase",
      "Pricing Plans",
      "Self-Service Onboarding",
      "Owner Dashboard",
      "Secure Authentication",
      "Dark Mode Support",
    ],
  },
  {
    id: "eas",
    name: "EAS Companion",
    icon: <Smartphone className="w-4 h-4" />,
    description: "A cross-platform mobile app (iOS & Android) that extends POS functionality to the floor, enabling tableside service, QR authentication, and on-the-go management.",
    lightScreenshot: "/images/platforms/tab/screenshots/mobile/eas-light.png",
    darkScreenshot: "/images/platforms/tab/screenshots/mobile/eas-dark.png",
    isMobile: true,
    features: [
      "QR Code Authentication",
      "Tableside Order Entry",
      "Table Status Viewer",
      "Mobile Clock In/Out",
      "Manager Alerts",
      "Inventory Counts",
      "Server Banking",
    ],
  },
  {
    id: "waitlist",
    name: "Waitlist Portal",
    icon: <ClipboardList className="w-4 h-4" />,
    description: "A customer-facing web app that allows guests to join the waitlist from their own device with real-time position updates.",
    lightScreenshot: "/images/platforms/tab/screenshots/desktop/waitlist-light.png",
    darkScreenshot: "/images/platforms/tab/screenshots/desktop/waitlist-dark.png",
    features: [
      "Self-Service Entry",
      "Geofencing",
      "Real-Time Updates",
      "SMS Notifications",
      "Multi-Restaurant Support",
    ],
  },
];

export { AppShowcase, defaultTabApps };
export type { AppTab, AppShowcaseProps };
