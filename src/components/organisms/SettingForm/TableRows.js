function TableRows({ rowsData, deleteTableRows, handleChange, handleCheckBox }) {
  return rowsData.map((data, index) => {
    const { label, default1, name, required } = data;
    return (
      <tr key={index}>
        <td>
          <input
            key={label}
            type="text"
            defaultValue={label}
            name="label"
            autoFocus="autoFocus"
            className="label-input-table"
            onChange={(e) => handleChange(index, e)}
          />
        </td>
        <td>
          <input
            key={default1}
            type="text"
            defaultValue={default1}
            name="default1"
            autoFocus="autoFocus"
            className="default-input-table"
            onChange={(e) => handleChange(index, e)}
          />
        </td>
        <td className="name-checkbox">
          <input
            type="checkbox"
            name="name"
            aria-label="label"
            defaultChecked={name}
            onChange={(e) => handleCheckBox(index, e)}
          />
        </td>
        <td className="required-checkox">
          <input
            type="checkbox"
            name="required"
            aria-label="label"
            defaultChecked={required}
            onChange={(e) => handleCheckBox(index, e)}
          />
        </td>
        <td>
          <img
            src="https://cdn3.iconfinder.com/data/icons/check-out-vol-2-glyph/48/Sed-39-256.png"
            alt="new"
            className="delete-property"
            onClick={() => deleteTableRows(index)}
          />
        </td>
      </tr>
    );
  });
}
export default TableRows;
