import { createContext, useContext } from "react";

export const formContext = createContext(null);
export const useFormContext = () => useContext(formContext);

export const FormProvider = ({ form, children }: any) => (
    <formContext.Provider value={form}>{children}</formContext.Provider>
);
export default FormProvider;