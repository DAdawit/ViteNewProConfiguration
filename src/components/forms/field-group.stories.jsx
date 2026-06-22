import { FieldGroup } from "./field-group"
import { useState } from "react"

export default {
  title: "Forms/FieldGroup",
  component: FieldGroup,
}

export const MultilingualInput = () => {
  const [values, setValues] = useState({
    en: "South Branch",
    am: "",
    or: "",
  })

  const handleChange = (lang, value) => {
    setValues((prev) => ({ ...prev, [lang]: value }))
  }

  return (
    <div className="max-w-2xl">
      <FieldGroup
        label="Organization Name"
        required
        languages={["en", "am", "or"]}
        values={values}
        onChange={handleChange}
        placeholder="Enter organization name"
      />
    </div>
  )
}

export const MultilingualTextarea = () => {
  const [values, setValues] = useState({
    en: "",
    am: "",
    or: "",
  })

  const handleChange = (lang, value) => {
    setValues((prev) => ({ ...prev, [lang]: value }))
  }

  return (
    <div className="max-w-2xl">
      <FieldGroup
        label="Description"
        required
        type="textarea"
        languages={["en", "am", "or"]}
        values={values}
        onChange={handleChange}
        placeholder="Enter description"
      />
    </div>
  )
}
