import { ErrorMessage, useField } from "formik";

export default function TextField ({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="form-group col-md-4">
        <label htmlFor={field.name}>{label}</label>
        <input          
          className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
          {...field} {...props}
          autoComplete="off"
        />
        <ErrorMessage name={field.name} />
      </div>
    </>
  )
}
