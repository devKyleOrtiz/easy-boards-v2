interface DashboardLayoutProps {
  userData?: {
    email: string;
    username: string;
  };
}

export default function DashboardLayout({ userData }: DashboardLayoutProps) {
  return <div>DashboardLayout</div>;
}
