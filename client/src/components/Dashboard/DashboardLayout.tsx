interface DashboardLayoutProps {
  userData?: {
    email: string;
    username: string;
  };
}

export default function DashboardLayout({ userData }: DashboardLayoutProps) {
  console.log(userData);
  return <div>DashboardLayout</div>;
}
