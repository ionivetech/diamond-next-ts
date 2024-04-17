import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'

const Navbar = () => {
  return (
    <div className='h-16 w-full bg-slate-100 px-5 text-slate-600'>
      <div className='flex h-full items-center justify-between'>
        {/* Hamburger menu */}
        <Button
          icon='pi pi-bars'
          rounded
          text
          severity='secondary'
          aria-label='hamburger-menu'
        />

        {/* Search field */}
        <IconField iconPosition='left'>
          <InputIcon className='pi pi-search' />
          <InputText
            placeholder='Search'
            className='p-inputtext-sm max-w-52 rounded-full p-2 pl-10'
            aria-label='search'
          />
        </IconField>
      </div>
    </div>
  )
}

export default Navbar
