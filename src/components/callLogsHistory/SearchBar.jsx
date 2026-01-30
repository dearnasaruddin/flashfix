import { Field, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

const SearchBar = ({icon, label, className }) => {
  return (
   <Field >
      { label && <FieldLabel htmlFor="input-group-url">{label}</FieldLabel>}
      <InputGroup className={className}>
        <InputGroupInput id="input-group-url" placeholder="Search by phone number, issue type..." />
        <InputGroupAddon >
          {icon}
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}

export default SearchBar