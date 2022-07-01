import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NavSettings.scss";
import { getData } from "../../utils/common.utils";

const NavSettings = ({ ...props }) => {
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

  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await getData("http://localhost:8000/equipments");
        setItemList(items);
      } catch (error) {
        console.log("error", error.message);
      }
    };
    fetchData();
  }, [plpURL]);

  const AddEquipment = () => {
    navigate("/unittypes/0");
  };
  const [inputText, setInputText] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  useEffect(() => {
    if (inputText !== "") {
      const filteredData = itemList.filter((item) => {
        return Object.values(item.name)
          .join("")
          .toLowerCase()
          .startsWith(inputText.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(itemList);
    }
  }, [inputText, itemList]);

  return (
    <div className="category-container">
      <ul className="category-list">
        <li className="search-add-bar">
          <input
            className="search-box-settings"
            type="text"
            aria-label="search-equipment"
            onChange={handleChange}
          />

          <img
            src="https://cdn0.iconfinder.com/data/icons/multimedia-solid-30px/30/search-256.png"
            alt="new"
            className="search-icon"
          />
          <img
            src="https://cdn0.iconfinder.com/data/icons/interface-line-4/48/Add_circle_new-256.png"
            alt="new"
            className="add-equipment"
            onClick={AddEquipment}
          />
        </li>

        {itemList && itemList.length > 0
          ? inputText.length > 0
            ? filteredResults.map((item) => {
              return (
                <>
                  <li
                    key={item.id}
                    id={
                      item.archive == true ? "archive-nav" : ""
                    }
                    className={
                      item.id == extractCategoryID && extractCategoryID != 0
                        ? "equipments-active"
                        : "equipments"
                    }
                    onClick={() => props.handleCategoryChange(item.id)}
                  >
                    <img
                      src={item.productIconURL}
                      className="equip-icon"
                      alt="equipment-icons"
                    ></img>
                    {item.name}
                  </li>
                </>
              );
            })
            : itemList.map((item) => {
              return (
                <>
                  <li
                    key={item.id}
                    id={
                      item.archive == true ? "archive-nav" : ""
                    }
                    className={
                      item.id == extractCategoryID && extractCategoryID != 0
                        ? "equipments-active"
                        : "equipments"
                    }
                    onClick={() => props.handleCategoryChange(item.id)}
                  >
                    <img
                      src={item.productIconURL}
                      className="equip-icon"
                      alt="equipment-icons"
                    ></img>
                    {item.name}
                  </li>
                </>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default NavSettings;
