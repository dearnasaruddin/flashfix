import { useState } from "react";
import { Copy } from 'lucide-react';
import { Check } from 'lucide-react';
import ButtonMain from "../shared/ButtonMain";


const BookingLink = () => {
    let [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        const link = "https://techstore.com/book?id=store123";
        navigator.clipboard.writeText(link);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <div className="p-6.25 w-full rounded-4xl bg-linear-to-b from-[#1A1A2E] to-[#16213E]">
            <h3 className=" font-inter font-normal text-base leading-6 text-white">
                Booking Link
            </h3>

            <div className=" mt-4 flex items-center justify-center gap-x-3">
                <div className=" cursor-pointer grow py-3.25 px-4 rounded-[14px] border border-[#0e4236] bg-[#111421] font-arimo font-normal text-base leading-6 text-white">
                    https://techstore.com/book?id=store123
                </div>
                <ButtonMain
                    className={ 'inset-shadow-primary bg-linear-to-b from-[#152252] to-[#111B3C] py-3.25 px-3 h-12.5 w-37.25 '}
                    icon={copied ?
                        <Check className={`${copied ? 'scale-100' : ' scale-0'}  transition-all duration-500 text-2xl`} />
                        :
                        <Copy className={`${copied ? 'scale-0' : 'scale-100'} transition-all duration-500 text-2xl`} />
                    }
                    text={copied ? 'Copied' : 'Copy Link'}
                    onClick={handleCopy} />
            </div>
        </div>
    )
}

export default BookingLink