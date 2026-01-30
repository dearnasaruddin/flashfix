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

// ============= Create array items ============
let customizedTableData = Array.from({ length: Math.ceil(66 / appointmentTableData.length) })
    .flatMap(() => appointmentTableData)
    .slice(0, 66);


const AppointmentTable = () => {

    {/* ============ Pagination functionality ============ */ }
    const [currentPage, setCurrentPage] = useState(1)
    const itemPerPage = 6
    const currentItemsToShow = customizedTableData.slice((currentPage * itemPerPage) - itemPerPage, currentPage * itemPerPage)

    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div>
            <div className='table-css'>
                <Table className={'text-white text-center'}>
                    {/* ============ Table Head ============ */}
                    <TableHeader>
                        <TableRow className={'border-[#162F61] bg-[#111b3b]'}>
                            <TableHead className="table-head-css">Client Name</TableHead>
                            <TableHead className="table-head-css">Client Phone</TableHead>
                            <TableHead className="table-head-css">Client mail</TableHead>
                            <TableHead className="table-head-css">Client Device</TableHead>
                            <TableHead className="table-head-css">Repair Type</TableHead>
                            <TableHead className="table-head-css">Date</TableHead>
                            <TableHead className="table-head-css">Slot no</TableHead>
                            <TableHead className="table-head-css">Start Time</TableHead>
                        </TableRow>
                    </TableHeader>

                    {/* ============ Table Body ============ */}
                    <TableBody>
                        {currentItemsToShow.map((item, index) => (
                            <TableRow className={'border-[#162F61] py-4.5 bg-[#111b3b]'} key={index}>
                                <TableCell className="table-cell-css text-[#51A2FF]">{item.clientName}</TableCell>
                                <TableCell className="table-cell-css text-[#CFCFCF]">{item.clientPhone}</TableCell>
                                <TableCell className="table-cell-css text-white">{item.clientMail}</TableCell>
                                <TableCell className="table-cell-css text-[#CFCFCF]">{item.device}</TableCell>
                                <TableCell className="table-cell-css text-[#CFCFCF]">{item.repairType}</TableCell>
                                <TableCell className="table-cell-css text-[#CFCFCF]">{item.date}</TableCell>
                                <TableCell className="table-cell-css text-[#CFCFCF]">{item.slotNo}</TableCell>
                                <TableCell className="table-cell-css text-[#CFCFCF]">{item.startTime}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* =============== Pagination Component =============== */}
            <Pagination totalItems={customizedTableData.length} itemPerPage={itemPerPage} currentPage={currentPage} onPageChange={handlePagination} />
        </div>
    )
}

export default AppointmentTable