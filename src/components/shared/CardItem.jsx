import { useLocation } from 'react-router-dom'

const CardItem = ({ preIcon, posIcon, value, title, percent, failed }) => {

  let { pathname } = useLocation()

  return (
    <div className={`w-full h-full bg-card-bg border border-borderColor px-4 md:px-6 py-4 md:py-6.5 rounded-[16px] flex gap-1 md:gap-2 max-md:flex-col font-inter justify-between`}>

      <div className="flex flex-col flex-1 gap-1 md:gap-2">

        {/* =========== card icon for set on the start position =========== */}
        <div className="flex gap-3">
          {preIcon && <div>{preIcon}</div>}
          <p className="text-gray text-sm font-normal leading-5">{title}</p>
        </div>

        {/* =========== card values =========== */}
        <div className='max-md:flex max-md:items-end max-md:gap-2'>
          <p className="text-xl md:text-2xl md:leading-9 text-white ">{value}</p>

          {/* =========== card percent =========== */}
          <p className={`
            ${pathname === '/' ?

              (failed ?
                'text-[#fd244a]'
                :
                'text-[#05df72]')

              :

              (String(percent).startsWith('+') ?
                'text-[#05df72]'
                :
                'text-gray')}

              max-md:mb-0.5 text-xs md:text-sm font-normal leading-5
              `}>
            {percent}
          </p>
        </div>

      </div>

      {/* =========== card icon for set on the last position =========== */}
      {posIcon && <div className="max-md:size-10 md:size-12">{posIcon}</div>}
    </div>
  )
}

export default CardItem