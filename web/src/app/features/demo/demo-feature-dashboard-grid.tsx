import { UiCard, UiDashboardGrid, UiDashboardItem, UiStack } from '@pubkey-ui/core'
import {
  IconBuildingBank,
  IconCashBanknote,
  IconCoin,
  IconCreditCard,
  IconReceipt,
  IconReceiptRefund,
  IconReceiptTax,
  IconRepeat,
  IconReport,
} from '@tabler/icons-react'
import { ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'

export function useDashboardItems(): {
  links: UiDashboardItem[]
  routes: ReactNode
} {
  const links: UiDashboardItem[] = [
    { to: 'credit-cards', label: 'Credit cards', icon: IconCreditCard },
    { to: 'banks-nearby', label: 'Banks nearby', icon: IconBuildingBank },
    { to: 'transfers', label: 'Transfers', icon: IconRepeat },
    { to: 'refunds', label: 'Refunds', icon: IconReceiptRefund },
    { to: 'receipts', label: 'Receipts', icon: IconReceipt },
    { to: 'taxes', label: 'Taxes', icon: IconReceiptTax },
    { to: 'reports', label: 'Reports', icon: IconReport },
    { to: 'payments', label: 'Payments', icon: IconCoin },
    { to: 'cashback', label: 'Cashback', icon: IconCashBanknote },
  ]
  const routes = useRoutes([
    { index: true, element: <div>Dashboard Grid</div> },
    ...links.map((link) => ({ path: link.to, element: <div>{link.label}</div> })),
  ])

  return {
    links,
    routes,
  }
}

export function DemoFeatureDashboardGrid() {
  const base = '/demo/dashboard-grid'
  const { links, routes } = useDashboardItems()
  return (
    <UiStack>
      <UiDashboardGrid
        links={links.map(({ to, label, icon }) => ({
          to: `${base}/${to}`,
          label,
          icon,
        }))}
      />
      <UiCard>{routes}</UiCard>
    </UiStack>
  )
}
