import { Controller } from 'react-hook-form';
import Select from 'react-select';

export const Input = ({
    name,
    type,
    label,
    icon = "",
    iconStyles = {},
    validations,
    form,
    className = "mb-3",
    labelProps = {},
    inputStyleProps = {},
    ...rest
}: any) => {
    const {
        register,
        formState: { errors },
    } = form;

    const iconStyle = {
        backgroundImage: `url(${icon})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right calc(0.375em + 0.1875rem) center",
        backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
        ...iconStyles
    }

    return (
        <div className={`Icon-inside ${className}`}>
            <label htmlFor={name} className="form-label" {...labelProps}>
                {label}
                {(validations?.required || rest?.required) && (
                    <span className="text-danger">*</span>
                )}
            </label>
            <input
                className={`form-control`}
                type={type}
                id={name}
                style={icon ? iconStyle : inputStyleProps}
                {...register(name, { ...validations })}
                {...rest}
                aria-invalid={errors[name] ? "true" : "false"}
            />
            {errors?.[name] && (
                <p className="text-danger mt-1">
                    {errors[name]?.message?.toString() || "This field is required."}
                </p>
            )}
        </div>
    );
};

export const CheckBoxInput = ({
    name,
    type,
    label,
    validations,
    form,
    className = "mb-3",
    labelProps = {},
    ...rest
}: any) => {
    const {
        register,
        formState: { errors },
    } = form;
    return (
        <div className={`form-check ${className}`}>
            <label htmlFor={name} className="form-check-label" {...labelProps}>
                <input
                    className={"form-check-input"}
                    type="checkbox"
                    name={name}
                    id={name}
                    {...register(name, { ...validations })}
                    {...rest}
                    aria-invalid={errors[name] ? "true" : "false"}
                />
                {label}
                {validations?.required && <span className="text-danger">*</span>}
            </label>
            {errors[name] && (
                <p className="text-danger">
                    {errors[name]["message"] || "This field is required."}
                </p>
            )}
        </div>
    );
};

export const RadioInput = ({
    name,
    type,
    options,
    label,
    validations,
    form,
    className = "d-flex flex-wrap gap-4",
    labelProps = {},
    ...rest
}: any) => {
    const {
        register,
        formState: { errors },
    } = form;

    return (
        <div className="mb-3">
            <div className={`${className}`}>
                {Array.isArray(options) &&
                    options.map((value, idx) => (
                        <div key={`check_${idx}`} className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name={name}
                                value={value}
                                id={value}
                                {...register(name, { ...validations })}
                                {...rest}
                                aria-invalid={errors[name] ? "true" : "false"}
                            />
                            <label className="form-check-label" htmlFor={value}>
                                {value}
                            </label>
                        </div>
                    ))}
            </div>
            {errors?.[name] && (
                <p className="text-danger mt-1">
                    {errors[name]?.message?.toString() || "This field is required."}
                </p>
            )}
        </div>
    );
};

export const NormalSelectInput = ({
    name,
    type,
    options,
    label,
    validations,
    form,
    className = "mb-3",
    labelProps = {},
    ...rest
}: any) => {
    const {
        register,
        formState: { errors },
    } = form;

    return (
        <>
            <div className={`${className}`}>
                <label className="form-check-label mb-2" htmlFor={name}>
                    {label}
                </label>
                <select
                    className={`form-select`}
                    name={name}
                    id={name}
                    aria-invalid={errors[name] ? "true" : "false"}
                    {...rest}
                >
                    {Array.isArray(options) &&
                        options.map((option, idx) => (
                            <option
                                key={`options_${idx}`}
                                id={option?.value}
                                className=""
                                value={option?.value}
                                {...register(name, { ...validations })}
                            >
                                {option?.label}
                            </option>
                        ))}
                </select>
                {errors?.[name] && (
                    <p className="text-danger mt-1">
                        {errors[name]?.message?.toString() || "This field is required."}
                    </p>
                )}
            </div>
        </>
    );
};

export const ReactSelectInput = ({
    name,
    options,
    validations,
    form,
    className = "mb-3",
    ...rest
}: any) => {
    const {
        control,
        formState: { errors },
    } = form;

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field }: any) => {
                    return <Select
                        {...field}
                        className={`react-select ${errors[name] ? "error" : ""} ${className}`}
                        classNamePrefix="select"
                        name={name}
                        options={options || []}
                        isMulti
                        {...rest}
                    />
                }}
            />
            {errors?.[name] && (
                <p className="text-danger mt-1">
                    {errors[name]?.message?.toString() || "This field is required."}
                </p>
            )}
        </>
    );
};
