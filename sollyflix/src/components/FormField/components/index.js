import React from "react";

function FormFieldTextArea({label, type, name, value, onChange }) {
  return (
    <div>
          <label>
            {label}: 
            <textarea
              type={type}
              value={value}
              name = {name}
              onChange={onChange}
            />
          </label>
        </div>
  )
}

export default FormFieldTextArea;