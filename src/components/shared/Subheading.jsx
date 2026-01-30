import {twMerge} from 'tailwind-merge'

const Subheading = ({content='Top Repair Requests', className}) => {
  return (
    <h3 className={twMerge('font-inter text-xl leading-7 text-white', className)}>{content}</h3>
  )
}

export default Subheading