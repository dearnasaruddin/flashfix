import { Field, FieldLabel } from "@/components/ui/field"
import { Progress } from "@/components/ui/progress"

const RequestBar = ({ value, requestNum, requestName }) => {
    return (
        <Field className="w-full">
            {/* ========= Label ========= */}
            <FieldLabel htmlFor="progress-upload">
                <span className="font-arimo font-normal text-sm leading-5 text-white">{requestName}</span>
                <span className="ml-auto font-arimo font-normal text-sm leading-5 text-[#C0CCDD]">{requestNum} requests</span>
            </FieldLabel>

            {/* ========= Progress Bar ========= */}
            <Progress value={value} id="progress-upload" />
        </Field>
    )
}

export default RequestBar