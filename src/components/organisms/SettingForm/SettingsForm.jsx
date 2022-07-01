import React, { useEffect } from "react";
import { useState } from "react";
import "./SettingsForm.scss";
import { useNavigate } from "react-router-dom";
import Spinner from "../../atoms/Spinner/Spinner";
import TableRows from "./TableRows";
import TableRowsParts from "./TableRowsParts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SettingsForm = () => {
  const [rowsData1, setRowsData1] = useState([{}]);
  const [rowsData2, setRowsData2] = useState([{}]);
  const [archiveBtn, setarchiveBtn] = useState("Archive");
  const [archiveFlag, setArchiveFlag] = useState();
  const [archiveCSS, setarchiveCSS] = useState("");
  const [btnCSS, setbtnCSS] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [name, setname] = useState("");
  const [shortName, setshortName] = useState("");
  const [equipIcon, setequipIcon] = useState("");
  const [comments, setcomments] = useState("");
  const [selectedEquipIcon, setselectedEquipIcon] = useState("");
  const [cancelCSS, setcancelCSS] = useState("");
  const [maintain, setmaintain] = useState("not-required");
  const [validName, setvalidName] = useState("");
  let [len, setlen] = useState();

  let navigate = useNavigate();
  const plpURL = window.location.href;
  let extractCategoryID = plpURL.split("/");
  let extractCategoryIDLen = extractCategoryID.length;
  if (extractCategoryID[extractCategoryIDLen - 1] == '') {
    extractCategoryID = extractCategoryID[extractCategoryIDLen - 2];
  }
  else {
    extractCategoryID = extractCategoryID[extractCategoryIDLen - 1];
  }

  const options = [
    {
      value: "Computer",
      label: "Computer",
      icon: "https://cdn3.iconfinder.com/data/icons/computer-system-and-data/512/1-256.png",
    },
    {
      value: "Hard Disk",
      label: "Hard Disk",
      icon: "https://cdn3.iconfinder.com/data/icons/computer-system-and-data/512/26-256.png",
    },
    {
      value: "Memory",
      label: "Memory",
      icon: "https://cdn1.iconfinder.com/data/icons/software-hardware/200/software-22-256.png",
    },
    {
      value: "Monitor",
      label: "Monitor",
      icon: "https://cdn1.iconfinder.com/data/icons/aami-web-internet/64/aami16-15-256.png",
    },
    {
      value: "Processor",
      label: "Processor",
      icon: "https://cdn2.iconfinder.com/data/icons/abstract-electronics-1/100/10-256.png",
    },
  ];

  useEffect(() => {
    async function myFunction() {
      const req = await fetch("http://localhost:8000/equipments/");
      const data = await req.json();
      setlen(data.length);
      if (extractCategoryID == "none") {
        setLoading(false);
        setcancelCSS("cancel-css");
        setmaintain("maintain");
      }
      if (extractCategoryID == 0) {
        setname("");
        setvalidName("input-field");
        setshortName("");
        setequipIcon("");
        setselectedEquipIcon(
          "https://cdn3.iconfinder.com/data/icons/computer-system-and-data/512/1-256.png"
        );
        setRowsData1([{}]);
        setRowsData2([{}]);
        setcancelCSS("");
        setmaintain("not-required");
        setcomments("");
        setArchiveFlag(true);
        setarchiveBtn("Cancel");
        setbtnCSS("save-btn");
        setarchiveCSS("");
        setLoading(false);
      } else if (extractCategoryID > 0) {
        if (data[extractCategoryID - 1].archive === true) {
          setArchiveFlag(false);
          setarchiveBtn("Restore");
          setarchiveCSS("archive-page");
          setbtnCSS("new-save-btn");
        } else if (data[extractCategoryID - 1].archive === false) {
          setArchiveFlag(true);
          setarchiveBtn("Archive");
          setbtnCSS("save-btn");
          setarchiveCSS("");
        }
        setname(data[extractCategoryID - 1].name);
        setvalidName("input-field");
        setshortName(data[extractCategoryID - 1].shortName);
        setequipIcon(data[extractCategoryID - 1].icon);
        setselectedEquipIcon(data[extractCategoryID - 1].productIconURL);
        setRowsData1(data[extractCategoryID - 1].properties);
        setRowsData2(data[extractCategoryID - 1].parts);
        setcomments(data[extractCategoryID - 1].comments);
        setcancelCSS("");
        setmaintain("not-required");
        setLoading(false);
      }
    }

    myFunction();
  }, [extractCategoryID]);

  const addTableRows1 = () => {
    const rowsInput = {
      label: "",
      default1: "",
      name: false,
      required: false,
    };
    setRowsData1([...rowsData1, rowsInput]);
  };

  const addTableRows2 = () => {
    const rowsInput2 = {
      partName: "",
      name: false,
      required: false,
    };
    setRowsData2([...rowsData2, rowsInput2]);
  };

  const deleteTableRows1 = (index) => {
    const rows = [...rowsData1];
    rows.splice(index, 1);
    setRowsData1(rows);
  };

  const deleteTableRows2 = (index) => {
    const rows = [...rowsData2];
    rows.splice(index, 1);
    setRowsData2(rows);
  };

  const handleChange1 = (index, e) => {
    let { name, value } = e.target;
    const rowsInput = [...rowsData1];
    rowsInput[index][name] = value;
    setRowsData1(rowsInput);
  };

  const handleChange2 = (index, e) => {
    let { name, value } = e.target;
    const rowsInput = [...rowsData2];
    rowsInput[index][name] = value;
    setRowsData2(rowsInput);
  };

  const handleCheckbox1 = (index, e) => {
    let { name, value } = e.target;
    if (e.target.checked === true) {
      value = true;
    }
    if (e.target.checked === false) {
      value = false;
    }
    const rowsInput = [...rowsData1];
    rowsInput[index][name] = value;
    setRowsData1(rowsInput);
  };

  const handleCheckbox2 = (index, e) => {
    let { name, value } = e.target;
    if (e.target.checked === true) {
      value = true;
    }
    if (e.target.checked === false) {
      value = false;
    }
    const rowsInput = [...rowsData2];
    rowsInput[index][name] = value;
    setRowsData2(rowsInput);
  };

  const archivePage = () => {
    if (archiveBtn == "Cancel") {
      navigate("/unittypes/none");
      return;
    }
    if (archiveFlag === true) {
      fetch(`http://localhost:8000/equipments/${extractCategoryID}`, {
        method: "PATCH",
        body: JSON.stringify({
          archive: true,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then(() => {
          setArchiveFlag(false);
          setarchiveBtn("Restore");
          setarchiveCSS("archive-page");
          setbtnCSS("new-save-btn");
        });
      let url = window.location.href;
      let settingsURL = url.split('/');
      let len = settingsURL.length;
      if (settingsURL[len - 1] == '')
        navigate(`/unittypes/${extractCategoryID}`);
      else
        navigate(`/unittypes/${extractCategoryID}/`);
    } else if (archiveFlag === false) {
      fetch(`http://localhost:8000/equipments/${extractCategoryID}`, {
        method: "PATCH",
        body: JSON.stringify({
          archive: false,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then(() => {
          setArchiveFlag(true);
          setarchiveBtn("Archive");
          setbtnCSS("save-btn");
          setarchiveCSS("");
        });
      let url = window.location.href;
      let settingsURL = url.split('/');
      let len = settingsURL.length;
      if (settingsURL[len - 1] == '')
        navigate(`/unittypes/${extractCategoryID}`);
      else
        navigate(`/unittypes/${extractCategoryID}/`);
    }
  };

  const handleIconChange = (e) => {
    setequipIcon(e.target.value);
    for (let i = 0; i < options.length; i++) {
      if (options[i].value == e.target.value) {
        setselectedEquipIcon(options[i].icon);
      }
    }
  };

  const handleCommentChange = (e) => {
    setcomments(e.target.value);
  };

  const handleName = (e) => {
    setname(e.target.value);
  };

  const handleShortName = (e) => {
    setshortName(e.target.value);
  };

  const saveData = () => {
    if (name == "") {
      setvalidName("invalid-input");
    }
    else {
      setvalidName("input-field");
      if (extractCategoryID == 0) {
        fetch(`http://localhost:8000/equipments/`, {
          method: "POST",
          body: JSON.stringify({
            name: name,
            shortName: shortName,
            icon: equipIcon,
            productIconURL: selectedEquipIcon,
            comments: comments,
            properties: rowsData1,
            parts: rowsData2,
            archive: false,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then(() => {
            toast.success(`${name} details have been saved`, {
              theme: "light",
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2500,
            });
          });
        navigate(`/unittypes/${len + 1}`);
      }
      if (extractCategoryID > 0) {
        fetch(`http://localhost:8000/equipments/${extractCategoryID}`, {
          method: "PATCH",
          body: JSON.stringify({
            name: name,
            shortName: shortName,
            icon: equipIcon,
            productIconURL: selectedEquipIcon,
            comments: comments,
            properties: rowsData1,
            parts: rowsData2,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then(() => {
            toast.success(`${name} details have been saved`, {
              theme: "light",
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2500,
            });
          });
        let url = window.location.href;
        let settingsURL = url.split('/');
        let len = settingsURL.length;
        if (settingsURL[len - 1] == '')
          navigate(`/unittypes/${extractCategoryID}`);
        else
          navigate(`/unittypes/${extractCategoryID}/`);

      }

    }

  };
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div className={maintain}>
            Select any equipment from the list or click on the '+' icon
          </div>
          <div className={cancelCSS}>
            <div className="save-archive-btn">
              <button className={btnCSS} type="submit" onClick={saveData}>
                Save
              </button>

              <button
                className="archive-btn"
                type="button"
                onClick={archivePage}
              >
                {archiveBtn}
              </button>
            </div>

            <div className={archiveCSS}>
              <div className="form-details">
                <div className="form-name">
                  <label htmlFor="Name" className="label-field required">
                    Name
                  </label>
                  <input
                    className={validName}
                    aria-required="true"
                    id="Name"
                    type="text"
                    key={name}
                    defaultValue={name}
                    onChange={handleName}
                    autoFocus="autoFocus"
                    required="true"
                  ></input>
                </div>
                <div className="form-short-name">
                  <label htmlFor="Short-Name" className="label-field">
                    Short Name
                  </label>
                  <input
                    className="input-field"
                    aria-required="true"
                    id="Short-Name"
                    autoFocus="autoFocus"
                    type="text"
                    key={shortName}
                    defaultValue={shortName}
                    onChange={handleShortName}
                  ></input>
                </div>
                <div className="form-icons">
                  <label htmlFor="Icons" className="label-field">
                    Icons
                  </label>
                  <select
                    className="input-field"
                    value={equipIcon}
                    onChange={handleIconChange}
                  >
                    {options.map((option) => (
                      <option value={option.value}>
                        <img
                          className="equip-icons"
                          src={option.icon}
                          alt="equipment-icons"
                        />
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-properties">
                  <label htmlFor="Properties" className="label-field">
                    Properties
                  </label>
                  <table className="table-properties" id="Properties">
                    <thead className="thead-light">
                      <tr>
                        <th className="label-table" scope="col">
                          Label
                        </th>
                        <th className="default-table" scope="col">
                          Default
                        </th>
                        <th className="name-table" scope="col">
                          Name
                        </th>
                        <th className="required-table" scope="col">
                          Required
                        </th>
                        <th className="delete-row-table" scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <TableRows
                        rowsData={rowsData1}
                        deleteTableRows={deleteTableRows1}
                        handleChange={handleChange1}
                        handleCheckBox={handleCheckbox1}
                      />
                    </tbody>
                  </table>
                  <div className="add-property" onClick={addTableRows1}>
                    Add property
                  </div>
                </div>

                <div className="form-parts">
                  <label htmlFor="Parts" className="label-field">
                    Parts
                  </label>
                  <table className="table-parts" id="Parts">
                    <thead className="thead-light">
                      <tr>
                        <th className="part-name-table" scope="col">
                          Part name
                        </th>
                        <th className="name-table" scope="col">
                          Name
                        </th>
                        <th className="required-table" scope="col">
                          Required
                        </th>
                        <th className="delete-row-table" scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <TableRowsParts
                        rowsData={rowsData2}
                        deleteTableRows={deleteTableRows2}
                        handleChange={handleChange2}
                        handleCheckBox={handleCheckbox2}
                      />
                    </tbody>
                  </table>
                  <div className="add-part" onClick={addTableRows2}>
                    Add part
                  </div>
                </div>
                <div className="comments">
                  <label htmlFor="Comments" className="label-field">
                    Comments
                  </label>
                  <textarea
                    id="Comments"
                    className="comments-form"
                    value={comments}
                    onChange={handleCommentChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer
        progressClassName="toastProgress"
        bodyClassName="toastBody"
      />
    </div>
  );
};

export default SettingsForm;
