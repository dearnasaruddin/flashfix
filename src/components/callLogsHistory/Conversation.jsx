import PaperIcon from "@/assets/icons/PaperIcon"


const Conversation = ({ data }) => {
    return (
        <>

            {/* =============== Heading =============== */}
            <div className="flex gap-2 items-center mb-3 text-info ">
                <PaperIcon />
                <p className="text-white text-base leading-6 ">Conversation Transcript</p>
            </div>

            {
                data.transcript.length !== 0 ?
                    <>
                        {/* =============== Conversation =============== */}
                        <div className="bg-[#1D293D50] rounded-[14px] flex flex-col gap-3 p-4  ">
                            {
                                data.transcript.map((item, index) => (
                                    <div key={index}>
                                        <p className={`text-base leading-6 ${item.role !== 'Customer' ? 'text-green' : 'text-info'} `}>{item.role}</p>
                                        <p className="font-inter text-xs leading-5 text-white font-medium ">{item.message}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                    :
                    <>
                        {/* =============== Empty State =============== */}
                        <div className="bg-primary rounded-[14px] flex flex-col gap-3 p-10  ">

                            <div className="flex flex-col gap-4 items-center justify-center">
                                <PaperIcon className={'size-20 text-gray  '} />
                                <p className="text-gray text-lg leading-5 ">No Transcript Here!</p>
                            </div>

                        </div>
                    </>
            }
        </>
    )
}

export default Conversation