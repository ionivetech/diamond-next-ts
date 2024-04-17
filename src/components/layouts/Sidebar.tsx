'use client'
import clsx from 'clsx'
import { useState } from 'react'
import Link from 'next/link'
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
  const [isActive, setIsActive] = useState<string>('')

  // Toggle active dropdown menu
  const toggleActive = (value: string) => {
    if (isActive === value) setIsActive('')
    else setIsActive(value)
  }

  return (
    <ul {...props}>
      {menus.map((menu) => (
        <li key={menu.label.toLowerCase()}>
          {/* Dropdown menu */}
          {!!menu.items && (
            <>
              <a
                className='flex cursor-pointer items-center justify-between px-6 py-2 text-slate-700 transition-colors duration-200 hover:bg-slate-200'
                onClick={() => toggleActive(menu.label.toLowerCase())}
              >
                <div className='flex items-center gap-x-3'>
                  <i className={`${menu.icon} text-sm text-blue-500`} />
                  <p className='text-sm'>{menu.label}</p>
                </div>

                <i
                  className={`pi pi-angle-down text-xs transition-all duration-200 ease-linear ${isActive === menu.label.toLowerCase() && 'rotate-180'}`}
                />
              </a>

              {/* Children menu */}
              <PanelMenu
                menus={menu.items!}
                isChildren={true}
                className={clsx('overflow-hidden', {
                  'max-h-0 transition-all duration-300 ease-in-out': isActive !== menu.label.toLowerCase(),
                  'max-h-[1000px] transition-all duration-1000 ease-in-out': isActive === menu.label.toLowerCase(),
                })}
              />
            </>
          )}

          {/* Default menu */}
          {!menu.items && (
            <Link
              href={menu.url!}
              className={clsx(
                'flex cursor-pointer items-center justify-between px-6 py-2 text-slate-700 transition-colors duration-200 hover:bg-slate-200',
                {
                  'pl-10': isChildren,
                },
              )}
            >
              <div className='flex items-center gap-x-3'>
                <i className={`${menu.icon} text-sm text-blue-500`} />
                <p className='text-sm'>{menu.label}</p>
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
          label: 'Input',
          icon: 'pi pi-check-square',
          url: '/input',
        },
        {
          label: 'Button',
          icon: 'pi pi-box',
          url: '/button',
        },
      ],
    },
  ]

  return (
    <div className='h-screen w-[270px] bg-slate-100'>
      <div>
        {menus.map((menu) => (
          <div key={menu.section.toLowerCase()}>
            <div className='px-6 py-2 text-sm font-semibold uppercase text-blue-500'>{menu.section}</div>
            <PanelMenu menus={menu.menus} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
