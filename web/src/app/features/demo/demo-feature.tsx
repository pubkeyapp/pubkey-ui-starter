import { UiGridRoutes, UiPage } from '@pubkey-ui/core'
import { ReactNode } from 'react'
import { DemoFeatureAlerts } from './demo-feature-alerts'
import { DemoFeatureAnchor } from './demo-feature-anchor'
import { DemoFeatureBack } from './demo-feature-back'
import { DemoFeatureCard } from './demo-feature-card'
import { DemoFeatureCopy } from './demo-feature-copy'
import { DemoFeatureDashboardGrid } from './demo-feature-dashboard-grid'
import { DemoFeatureDebug } from './demo-feature-debug'
import { DemoFeatureForm } from './demo-feature-form'
import { DemoFeatureGridRoutes } from './demo-feature-grid-routes'
import { DemoFeatureGroup } from './demo-feature-group'
import { DemoFeatureHeader } from './demo-feature-header'
import { DemoFeatureLoader } from './demo-feature-loader'
import { DemoFeatureLogo } from './demo-feature-logo'
import { DemoFeatureMenu } from './demo-feature-menu'
import { DemoFeatureNotFound } from './demo-feature-not-found'
import { DemoFeaturePage } from './demo-feature-page'
import { DemoFeatureSearchInput } from './demo-feature-search-input'
import { DemoFeatureStack } from './demo-feature-stack'
import { DemoFeatureTabRoutes } from './demo-feature-tab-routes'
import { DemoFeatureThemeSelect } from './demo-feature-theme-select'
import { DemoFeatureTime } from './demo-feature-time'
import { DemoFeatureToast } from './demo-feature-toast'

export function DemoFeature() {
  const demos: {
    path: string
    label: string
    element: ReactNode
  }[] = [
    { path: 'alerts', label: 'Alerts', element: <DemoFeatureAlerts /> },
    { path: 'anchor', label: 'Anchor', element: <DemoFeatureAnchor /> },
    { path: 'back', label: 'Back', element: <DemoFeatureBack /> },
    { path: 'card', label: 'Card', element: <DemoFeatureCard /> },
    { path: 'copy', label: 'Copy', element: <DemoFeatureCopy /> },
    { path: 'dashboard-grid', label: 'Dashboard Grid', element: <DemoFeatureDashboardGrid /> },
    { path: 'debug', label: 'Debug', element: <DemoFeatureDebug /> },
    { path: 'form', label: 'Form', element: <DemoFeatureForm /> },
    { path: 'grid-routes', label: 'Grid Routes', element: <DemoFeatureGridRoutes /> },
    { path: 'group', label: 'Group', element: <DemoFeatureGroup /> },
    { path: 'header', label: 'Header', element: <DemoFeatureHeader /> },
    { path: 'loader', label: 'Loader', element: <DemoFeatureLoader /> },
    { path: 'logo', label: 'Logo', element: <DemoFeatureLogo /> },
    { path: 'menu', label: 'Menu', element: <DemoFeatureMenu /> },
    { path: 'not-found', label: 'Not Found', element: <DemoFeatureNotFound /> },
    { path: 'page', label: 'Page', element: <DemoFeaturePage /> },
    { path: 'search-input', label: 'Search Input', element: <DemoFeatureSearchInput /> },
    { path: 'stack', label: 'Stack', element: <DemoFeatureStack /> },
    { path: 'tab-routes', label: 'Tab Routes', element: <DemoFeatureTabRoutes /> },
    { path: 'theme-select', label: 'Theme Select', element: <DemoFeatureThemeSelect /> },
    { path: 'time', label: 'Time', element: <DemoFeatureTime /> },
    { path: 'toast', label: 'Toast', element: <DemoFeatureToast /> },
  ]

  return (
    <UiPage title="Demo">
      <UiGridRoutes basePath="/demo" routes={demos} />
    </UiPage>
  )
}
