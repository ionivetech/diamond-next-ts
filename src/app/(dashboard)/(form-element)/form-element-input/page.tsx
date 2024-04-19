'use client'

import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputTextarea } from 'primereact/inputtextarea'
import { Dropdown } from 'primereact/dropdown'
import { MultiSelect } from 'primereact/multiselect'

interface Cities {
  name: string
  code: string
}

export default function FormElementInput() {
  const [selectVal, setSelectVal] = useState<Cities | null>(null)
  const [multiSelectVal, setMultiSelectVal] = useState<Cities[] | null>(null)
  const cities: Cities[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ]

  return (
    <div className='space-y-8'>
      {/* Inputs */}
      <div className='card'>
        <div className='flex flex-col gap-10'>
          {/* Input Text */}
          <div>
            <h5>Input Text</h5>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
              <InputText
                placeholder='Default'
                size='small'
              />
              <InputText
                placeholder='Disabled'
                disabled
              />
              <InputText
                placeholder='Invalid'
                invalid
              />
            </div>
          </div>

          {/* Input with Icon */}
          <div>
            <h5>Input with Icon</h5>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
              <IconField iconPosition='left'>
                <InputIcon className='pi pi-search' />
                <InputText
                  placeholder='Search'
                  className='w-full'
                />
              </IconField>

              <IconField iconPosition='right'>
                <InputIcon className='pi pi-search' />
                <InputText
                  placeholder='Search'
                  className='w-full'
                />
              </IconField>
            </div>
          </div>

          {/* Text Area */}
          <div>
            <h5>Text Area</h5>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
              <InputTextarea
                rows={5}
                cols={30}
                placeholder='Default'
              />
              <InputTextarea
                rows={5}
                cols={30}
                disabled
                placeholder='Disabled'
              />
              <InputTextarea
                rows={5}
                cols={30}
                invalid
                placeholder='Invalid'
              />
            </div>
          </div>

          {/* Select, Multiselect */}
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {/* Select */}
            <div>
              <h5>Select</h5>
              <Dropdown
                value={selectVal}
                onChange={(e) => setSelectVal(e.value)}
                options={cities}
                optionLabel='name'
                placeholder='Select a City'
                className='w-full'
              />
            </div>

            {/* Multi Select */}
            <div>
              <h5>Multi Select</h5>
              <MultiSelect
                value={multiSelectVal}
                onChange={(e) => setMultiSelectVal(e.value)}
                options={cities}
                maxSelectedLabels={3}
                showClear
                optionLabel='name'
                placeholder='Select a City'
                className='w-full'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='card'>halo</div>
    </div>
  )
}
