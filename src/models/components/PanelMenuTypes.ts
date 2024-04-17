export interface PanelMenuTypes {
  label: string
  icon: string
  url?: string
  items?: PanelMenuTypes[]
}

export interface MenuTypes {
  section: string
  menus: PanelMenuTypes[]
}
