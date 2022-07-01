function TableRowsParts({ rowsData, deleteTableRows, handleChange, handleCheckBox }) {
  return rowsData.map((data, index) => {
    const { partName, name, required } = data;
    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            key={partName}
            name="partName"
            className="part-name-input-table"
            defaultValue={partName}
            autoFocus="autoFocus"
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
            onClick={deleteTableRows}
          />
        </td>
      </tr>
    );
  });
}
export default TableRowsParts;
