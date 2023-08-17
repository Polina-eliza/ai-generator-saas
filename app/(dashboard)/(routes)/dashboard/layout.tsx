
import { getApiLimitCount } from "@/lib/api-limit";


const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className="h-full relative">
    <main className="md:pl-72">
      {children}
    </main>
  </div>
);
  }

export default DashboardLayout;