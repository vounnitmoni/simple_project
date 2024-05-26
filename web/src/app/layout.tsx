import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Inter } from "next/font/google";
import './globals.css';
import StoreProvider from './StoreProvider';
import Layout from '@/components/theme/Layout';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <StoreProvider>
            <Layout>
              {children}
            </Layout>
          </StoreProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
