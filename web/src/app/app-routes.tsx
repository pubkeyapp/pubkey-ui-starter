import { Group } from '@mantine/core'
import { UiHeaderLink, UiNotFound, UiThemeLink, UiThemeSwitch } from '@pubkey-ui/core'
import { lazy } from 'react'
import { Link, Navigate, RouteObject, useRoutes } from 'react-router-dom'
import { AppLayout } from './app-layout'
import { ClusterUiSelect } from './features/cluster/cluster-ui'
import { DashboardFeature } from './features/dashboard/dashboard-feature'
import { OposOutliersFeature } from './features/opos-outliers/opos-outliers-feature'
import { WalletIcon } from './features/solana/solana-provider'

const AccountList = lazy(() => import('./features/account/account-feature-list'))
const AccountDetail = lazy(() => import('./features/account/account-feature-detail'))
const ClusterFeature = lazy(() => import('./features/cluster/cluster-feature'))

const links: UiHeaderLink[] = [
  { label: 'Dashboard', link: '/dashboard' },
  { label: 'Account', link: '/account' },
  { label: 'Clusters', link: '/clusters' },
  { label: 'OPOS Outliers', link: '/opos-outliers' },
]
const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/dashboard" replace /> },
  { path: '/account', element: <AccountList /> },
  { path: '/account/:address', element: <AccountDetail /> },
  { path: '/clusters', element: <ClusterFeature /> },
  { path: '/dashboard', element: <DashboardFeature /> },
  { path: '/opos-outliers', element: <OposOutliersFeature /> },
  { path: '*', element: <UiNotFound /> },
]

export function AppRoutes() {
  const router = useRoutes(routes)

  return (
    <AppLayout
      links={links}
      profile={
        <Group>
          <ClusterUiSelect />
          <WalletIcon />
          <UiThemeSwitch />
        </Group>
      }
    >
      {router}
    </AppLayout>
  )
}

export const ThemeLink: UiThemeLink = ({ children, ...props }) => <Link {...props}>{children}</Link>
