export default function Fields({ fields, updateFields }) {
  return (
    <div className="row">
      {fields &&
        Object.entries(fields).map(([key, value]) => {
          return (
            <div key={key}>
              <label className="form-lable">{key}: </label>
              <input
                className="form-control"
                value={value}
                name={key}
                id={key}
                onChange={updateFields}
              />
            </div>
          )
        })}
    </div>
  )
}
