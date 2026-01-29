import {useLocation} from 'react-router-dom'

const CardItem = ({ preIcon, posIcon, value, title, percent,failed }) => {
    let {pathname} = useLocation()
  return (
    <div className={`w-full bg-card-bg border border-borderColor px-6 py-6.5 rounded-2xl flex gap-2 font-inter justify-between`}>
      <div className="flex flex-col flex-1 gap-2">
        <div className="flex gap-3">
          {preIcon && <div className="">{preIcon}</div>}
          <p className="text-[#90a1b9] text-sm font-normal leading-5">{title}</p>
        </div>
        <p className="text-2xl leading-9 text-white "> {value}</p>
        <p className={`${pathname === '/' ? (failed ? 'text-[#fd244a]' : 'text-[#05df72]') : (String(percent).startsWith('+') ? 'text-[#05df72]': 'text-[#90a1b9]')} text-sm font-normal leading-5`}> {percent}</p>
      </div>
      {posIcon && <div className="">{posIcon}</div>}
    </div>
  )
}

export default CardItem