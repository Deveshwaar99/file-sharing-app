import RouteHeader from '@/components/shared/RouteHeader'
import Sidenav from '@/components/shared/Sidenav'
import { Toaster } from '@/components/ui/sonner'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 h-full blur-xl"
        style={{
          background:
            'linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)',
        }}
      ></div>
      <div className="flex h-screen flex-col">
        <RouteHeader />
        <div className="h-full grow md:flex md:flex-row">
          <div className="hidden md:block">
            <Sidenav />
          </div>
          <div className="h-full w-full">{children}</div>
        </div>
        <Toaster />
      </div>
    </div>
  )
}
