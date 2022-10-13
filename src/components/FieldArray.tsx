import { useFormContext } from "./FormProvider"
import SelectField from "./Forms/SelectField"

const FieldArray = ({ fields }: any) => {
    const form: any = useFormContext();
    return (
        <>
            {fields.map((field: any) => field?.hide ? null :
                <SelectField key={field?.name} form={form} {...field} />)}
        </>
    )
}

export default FieldArray