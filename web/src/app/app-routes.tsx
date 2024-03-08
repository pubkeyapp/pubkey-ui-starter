import { Group } from '@mantine/core'
import { UiHeaderLink, UiNotFound, UiThemeLink, UiThemeSwitch } from '@pubkey-ui/core'
import { lazy } from 'react'
import { Link, Navigate, RouteObject, useRoutes } from 'react-router-dom'
import { AppLayout } from './app-layout'
import { ClusterUiSelect } from './features/cluster/cluster-ui'
import { DashboardFeature } from './features/dashboard/dashboard-feature'
import { WalletIcon } from './features/solana/solana-provider'

const AccountList = lazy(() => import('./features/account/account-list-feature'))
const AccountDetail = lazy(() => import('./features/account/account-detail-feature'))
const ClusterFeature = lazy(() => import('./features/cluster/cluster-feature'))

const links: UiHeaderLink[] = [
  { label: 'Dashboard', link: '/dashboard' },
  { label: 'Account', link: '/account' },
  { label: 'Demo', link: '/demo' },
  { label: 'Dev', link: '/dev' },
  { label: 'Themes', link: '/themes' },
]
const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/dashboard" replace /> },
  { path: '/account', element: <AccountList /> },
  { path: '/account/:address', element: <AccountDetail /> },
  { path: '/clusters', element: <ClusterFeature /> },
  { path: '/dashboard', element: <DashboardFeature /> },
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
