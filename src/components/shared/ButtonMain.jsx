import { Link, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const ButtonMain = ({ icon, text, routeName, className, onClick, profile }) => {

    const { pathname } = useLocation()

    const baseClassName = `
    py-1
    px-2
    rounded-[12px]
    bg-dot-img
    cursor-pointer
    ${icon ? 'flex items-center gap-2 md:gap-4' : ''}
    ${pathname == routeName || pathname.includes(text.toLocaleLowerCase()) ?
            'inset-shadow border-b border-[rgba(255,255,255,0.50)]'
            :
            ''
        }
    `

    return (

        routeName ?
            <Link onClick={onClick} to={routeName} className={twMerge(baseClassName, className)}>
                {/* ============ Icons ============ */}
                {
                    icon &&
                    <span className="text-white flex items-center justify-center size-7 md:size-8">
                        {icon}
                    </span>
                }
                {/* ============ Text ============ */}
                <span className={`${profile ? '' : 'max-lg:hidden '} font-inter font-medium leading-[150%] text-white whitespace-nowrap`}>
                    {text}
                </span>
            </Link >
            :

            <button onClick={onClick} className={twMerge(baseClassName, className)}>
                {/* ============ Icons ============ */}
                {icon &&
                    <span className="text-white flex items-center justify-center">
                        {icon}
                    </span>
                }
                {/* ============ Text ============ */}
                <span className=" max-sm:hidden font-inter font-medium text-sm md:text-base leading-[150%] text-white whitespace-nowrap">
                    {text}
                </span>
            </button>


    )
}

export default ButtonMain