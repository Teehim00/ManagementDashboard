export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] bg-red-200">L</div>
      {/* RIGHT */}
      <div className="w-[86%] bg-blue-200">R</div>
    </div>
  );
}
