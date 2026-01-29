import { Link, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const ButtonMain = ({ icon, text, routeName, className, onClick }) => {

    const { pathname } = useLocation()

    {/* <Link
                to={"/settings/profile"}
                className={`py-1 px-2 rounded-xl inset-shadow border-b border-[rgba(255,255,255,0.50)]`}
              >

                <span className=" font-inter whitespace-nowrap font-medium text-base leading-[150%] text-white">
                  Edit Profile
                </span>
              </Link> */}

    const baseClassName = `
    py-1
    px-2
    rounded-[12px]
    bg-dot-img
    cursor-pointer
    ${icon ? 'flex items-center gap-4' : ''}
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
                    <span className="text-white flex items-center justify-center">
                        {icon}
                    </span>
                }
                {/* ============ Text ============ */}
                <span className="font-inter font-medium leading-[150%] text-white whitespace-nowrap">
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
                <span className="font-inter font-medium text-base leading-[150%] text-white whitespace-nowrap">
                    {text}
                </span>
            </button>


    )
}

export default ButtonMain