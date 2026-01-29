import { useState } from "react";
import appointmentTableData from "@/projectData/appointmentTableData"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Pagination from "./Pagination";


let customizedTableData = Array.from({ length: Math.ceil(66 / appointmentTableData.length) })
    .flatMap(() => appointmentTableData)
    .slice(0, 66);


const AppointmentTable = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const itemPerPage = 6
    const currentItemsToShow = customizedTableData.slice((currentPage * itemPerPage) - itemPerPage, currentPage * itemPerPage)
    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (
        <div>
            <div className='max-md:max-w-[78dvw] max-md:mx-auto mt-8 rounded-[16px] overflow-hidden'>
                <Table className={'text-white text-center'}>
                    <TableHeader>
                        <TableRow className={'border-[#162F61] bg-[#111b3b]'}>
                            <TableHead className="text-white py-4.5 font-inter text-sm leading-5 text-center">Client Name</TableHead>
                            <TableHead className="text-white py-4.5 font-inter text-sm leading-5 text-center">Client Phone</TableHead>
                            <TableHead className="text-white py-4.5 font-inter text-sm leading-5 text-center">Client mail</TableHead>
                            <TableHead className="text-white py-4.5 font-inter text-sm leading-5 text-center">Client Device</TableHead>
                            <TableHead className="text-white py-4.5 font-inter text-sm leading-5 text-center">Repair Type</TableHead>
                            <TableHead className="text-white py-4.5 font-inter text-sm leading-5 text-center">Date</TableHead>
                            <TableHead className="text-white py-4.5 font-inter text-sm leading-5 text-center">Slot no</TableHead>
                            <TableHead className="text-white py-4.5 font-inter text-sm leading-5 text-center">Start Time</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentItemsToShow.map((item, index) => (
                            <TableRow className={'border-[#162F61] py-4.5 bg-[#111b3b]'} key={index}>
                                <TableCell className="py-4.5 font-arimo text-sm leading-5 text-[#51A2FF]">{item.clientName}</TableCell>
                                <TableCell className="py-4.5 font-inter text-sm leading-5 text-[#CFCFCF]">{item.clientPhone}</TableCell>
                                <TableCell className="py-4.5 font-inter text-sm leading-5 text-white">{item.clientMail}</TableCell>
                                <TableCell className="py-4.5 font-inter text-sm leading-5 text-[#CFCFCF]">{item.device}</TableCell>
                                <TableCell className="py-4.5 font-inter text-sm leading-5 text-[#CFCFCF]">{item.repairType}</TableCell>
                                <TableCell className="py-4.5 font-inter text-sm leading-5 text-[#CFCFCF]">{item.date}</TableCell>
                                <TableCell className="py-4.5 font-inter text-sm leading-5 text-[#CFCFCF]">{item.slotNo}</TableCell>
                                <TableCell className="py-4.5 font-inter text-sm leading-5 text-[#CFCFCF]">{item.startTime}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Pagination totalItems={customizedTableData.length} itemPerPage={itemPerPage} currentPage={currentPage} onPageChange={handlePagination} />
        </div>
    )
}

export default AppointmentTable