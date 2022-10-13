import FormProvider from "./components/FormProvider";
import { useForm } from "react-hook-form"
import FieldArray from "./components/FieldArray";
import { useEffect, useState } from "react";

const App = () => {

  const [show, setShow] = useState<boolean>(false)

  const fields = [
    {
      name: 'username',
      label: 'User Name',
      type: 'text',
      placeholder: 'User name',
      disabled: false,
    },
    {
      name: 'email',
      label: 'Email Id',
      type: 'email',
      placeholder: 'Email',
      disabled: false,
      validations: {
        required: true,
      }
    },
    {
      name: 'password',
      label: 'Password',
      type: show ? "text" : "password",
      placeholder: 'Password',
      disabled: false,
    },
    {
      name: 'show_password',
      label: 'Show password',
      type: 'checkbox',
      disabled: false,
    },
    {
      name: 'save',
      label: 'save2',
      type: 'checkbox',
      disabled: false,
    },
    {
      name: 'mobile',
      options: ["Android", "Apple"],
      type: 'radio',
      disabled: false,
    }
  ];

  const init = {
    username: 'vinoth',
    email: 'test@gmail.com',
    password: 'password'
  }

  const form = useForm({
    defaultValues: init
  });

  const { handleSubmit, watch } = form;

  const onSubmit = (data: any) => {
    console.log(data);
  }

  const showPassword = watch("show_password");



  useEffect(() => {
    setShow(!!showPassword);
  }, [showPassword])


  return (
    <div className="container">
      <h1 className='fw-bold'>Dynamic Form</h1>
      <div className="card">
        <div className="card-body">
          <FormProvider form={form}>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <FieldArray fields={fields} />
              <button className="btn btn-primary px-4" type="submit">Save</button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  )
}

export default App
