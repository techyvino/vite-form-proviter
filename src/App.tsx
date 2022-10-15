import FormProvider from "./components/FormProvider";
import { useForm } from "react-hook-form"
import FieldArray from "./components/FieldArray";
import { useEffect, useState } from "react";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Tick from './assets/ticksvg.svg'

const App = () => {

  const [show, setShow] = useState<boolean>(false)

  const fields = [
    {
      name: 'username',
      label: 'User Name',
      type: 'text',
      placeholder: 'User name',
      disabled: false,
      icon: Tick,
      validations: {
        required: true,
      }
    },
    {
      name: 'email',
      label: 'Email Id',
      type: 'email',
      placeholder: 'Email',
      required: true,
      disabled: false,
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
      name: 'mobile',
      options: ["Android", "Apple"],
      type: 'radio',
      disabled: false,
    },
    {
      name: 'select',
      label: 'Select',
      options: [{
        value: 'android',
        label: 'Android',
      }, {
        value: 'apple',
        label: 'Apple',
      }],
      type: 'normalSelect',
    },
    {
      name: 'react-select',
      label: 'React Select',
      options: [{
        value: 'android',
        label: 'Android',
      }, {
        value: 'apple',
        label: 'Apple',
      }],
      type: 'select',
    }
  ];

  const init = {
    username: '',
    email: '',
    password: '',
    show_password: false,
  }

  const schema = yup.object({
    username: yup.string(),
    password: yup.string().min(8),
    email: yup.string().email(),
    ["react-select"]: yup.array().of(
      yup.object().shape({
        value: yup.string(),
        label: yup.string(),
      })
    ).required()
  }).required();

  const form = useForm({
    defaultValues: init,
    resolver: yupResolver(schema)
  });

  const { handleSubmit, watch } = form;

  const onSubmit = (data: any) => {
    console.log(data);
  }

  const showPassword = watch("show_password");


  // const showPassword = watch('email');

  useEffect(() => {
    setShow(!!showPassword);
  }, [showPassword])

  return (
    <div className="container">
      <h1 className='fw-bold'>Dynamic Form</h1>
      <div className="card">
        <div className="card-body">
          <FormProvider form={form}>
            <form className="needs-validation" noValidate onSubmit={handleSubmit(onSubmit)}>
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
