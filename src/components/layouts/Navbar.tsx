import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'

const Navbar = () => {
  return (
    <div className='h-[70px] w-full px-8 text-slate-600'>
      <div className='flex h-full items-center justify-between'>
        {/* Hamburger menu */}
        <Button
          icon='pi pi-bars'
          rounded
          text
          severity='secondary'
          aria-label='hamburger-menu'
          className='text-2xl'
        />

        {/* Search field */}
        <IconField iconPosition='left'>
          <InputIcon className='pi pi-search' />
          <InputText
            placeholder='Search'
            className='p-inputtext max-w-56 rounded-full p-2 pl-10'
            aria-label='search'
          />
        </IconField>
      </div>
    </div>
  )
}

export default Navbar
