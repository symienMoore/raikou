// import "~/styles/globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { AppSidebar } from '~/components/app-sidebar'
import { Sidebar, SidebarProvider, SidebarTrigger } from '~/components/ui/sidebar'
// import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
          <body>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />  
            </SignedIn>
          </header>
            <SidebarProvider>
            <div className='flex flex-row'>
              <AppSidebar />
              <SidebarTrigger />
              {children}
            </div>
            </SidebarProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
