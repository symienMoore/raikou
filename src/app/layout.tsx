// import "~/styles/globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { AppSidebar } from 'src/components/app-sidebar'
import { Sidebar, SidebarProvider, SidebarTrigger } from '~/components/ui/sidebar'
import 'src/styles/globals.css'
// import "~/styles/globals.css";
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
            <div className='flex flex-row'>
            <SidebarProvider>
              <AppSidebar />
              <SidebarTrigger />
              {children}
            </SidebarProvider>
            </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
