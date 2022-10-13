export const Input = ({
    name,
    type,
    label,
    icon = '',
    iconProps = {},
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
        <div className={`Icon-inside ${className}`}>
            <label htmlFor={name} className="form-label" {...labelProps}>
                {label}
                {validations?.required && <span className="text-danger">*</span>}
            </label>
            <input
                className={`form-control ${icon ? "ps-5" : ""}`}
                type={type}
                id={name}
                {...register(name, { ...validations })}
                {...rest}
                aria-invalid={errors[name] ? "true" : "false"}
            />
            <span {...iconProps}>
                <i className={`icon ${icon}`} />
            </span>
            {errors?.[name] && (
                <p className="text-danger mt-1">{errors[name]?.message?.toString() || "This field is required."}</p>
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
            {errors[name] && <p className="text-danger">{errors[name]["message"] || "This field is required."}</p>}
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
    className = "mb-3",
    labelProps = {},
    ...rest
}: any) => {
    const {
        register,
        formState: { errors },
    } = form;

    console.log('options', options)

    return (
        <div className={`${className}`}>
            <div className="">
                {
                    Array.isArray(options) && options.map((value, idx) => (
                        <div key={`check_${idx}`} className="form-check">
                            <input className="form-check-input" type="radio" id={value}  {...register(name, { ...validations })}
                                {...rest}
                                aria-invalid={errors[name] ? "true" : "false"} />
                            <label className="form-check-label" htmlFor={value}>
                                {value}
                            </label>
                        </div>
                    ))
                }

            </div>

            {errors?.[name] && (
                <p className="text-danger mt-1">{errors[name]?.message?.toString() || "This field is required."}</p>
            )}
        </div>
    );
};


