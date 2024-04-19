'use client'
import clsx from 'clsx'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// Models
import type { MenuTypes, PanelMenuTypes } from 'models/components/PanelMenuTypes'

type PropsPanelMenu = {
  menus: PanelMenuTypes[]
  isChildren?: boolean
  className?: string
}

// Component for sidebar menu
const PanelMenu = (propsComponent: PropsPanelMenu) => {
  const { menus, isChildren = false, ...props } = propsComponent
  const pathname = usePathname()
  const [isActive, setIsActive] = useState<string>('')

  // Toggle active dropdown menu
  const toggleActive = (value: string) => {
    if (isActive === value) setIsActive('')
    else setIsActive(value)
  }

  return (
    <ul {...props}>
      {menus.map((menu) => (
        <li key={menu.id}>
          {/* Parent Dropdown menu item */}
          {!!menu.items && (
            <>
              <a
                className={clsx(
                  'flex cursor-pointer items-center justify-between rounded-lg px-6 py-3 text-slate-700 transition-colors duration-200 hover:bg-blue-50',
                  {
                    '!bg-blue-500 text-white': pathname.includes(menu.id),
                  },
                )}
                onClick={() => toggleActive(menu.id)}
              >
                <div className='flex items-center gap-x-3'>
                  {!!menu.icon && (
                    <i className={`${menu.icon} ${pathname.includes(menu.id) ? 'text-white' : 'text-blue-500'}`} />
                  )}
                  <p>{menu.label}</p>
                </div>

                <i
                  className={`pi pi-angle-down text-sm transition-all duration-200 ease-linear ${isActive === menu.id && 'rotate-180'}`}
                />
              </a>

              {/* Children menu */}
              <PanelMenu
                menus={menu.items!}
                isChildren={true}
                className={clsx('overflow-hidden', {
                  'max-h-0 transition-all duration-300 ease-in-out': isActive !== menu.id,
                  'max-h-[1000px] transition-all duration-1000 ease-in-out': isActive === menu.id,
                })}
              />
            </>
          )}

          {/* Parent menu item */}
          {!menu.items && !isChildren && (
            <Link
              href={menu.url!}
              className={clsx(
                'flex cursor-pointer items-center justify-between rounded-lg px-6 py-3 text-slate-700 transition-colors duration-200 hover:bg-blue-50',
                {
                  '!bg-blue-500 text-white': pathname.includes(menu.id),
                },
              )}
            >
              <div className='flex items-center gap-x-3'>
                {!!menu.icon && (
                  <i className={`${menu.icon} ${pathname.includes(menu.id) ? 'text-white' : 'text-blue-500'}`} />
                )}
                <p>{menu.label}</p>
              </div>
            </Link>
          )}

          {/* Child menu item */}
          {!menu.items && isChildren && (
            <Link
              href={menu.url!}
              className='flex cursor-pointer items-center justify-between rounded-lg px-6 py-3 pl-14 text-slate-700 transition-colors duration-200 hover:bg-blue-50'
            >
              <div className='flex items-center gap-x-3'>
                {!!menu.icon && <i className={`${menu.icon} text-blue-500`} />}
                <p className={pathname.includes(menu.id) ? 'font-semibold text-blue-500' : 'font-normal'}>
                  {menu.label}
                </p>
              </div>
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

const Sidebar = () => {
  const menus: MenuTypes[] = [
    {
      section: 'UI Kit',
      menus: [
        {
          id: 'form-element',
          label: 'Form Element',
          icon: 'pi pi-pen-to-square',
          items: [
            {
              id: 'form-element-input',
              label: 'Input',
              url: '/form-element-input',
            },
          ],
        },
        {
          id: 'button',
          label: 'Button',
          icon: 'pi pi-box',
          url: '/button',
        },
      ],
    },
  ]

  return (
    <div className='z-10 h-screen w-[270px] bg-white shadow-sidebar'>
      <div className='px-5'>
        {menus.map((menu) => (
          <div key={menu.section.toLowerCase()}>
            <div className='px-6 py-3 font-semibold uppercase text-blue-500'>{menu.section}</div>
            <PanelMenu menus={menu.menus} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
