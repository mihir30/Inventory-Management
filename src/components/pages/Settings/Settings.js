import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavSettings from "../../molecules/NavSettings/NavSettings";
import "./Settings.scss";
import SettingsForm from "../../organisms/SettingForm/SettingsForm";
const Settings = () => {
  const [selectedCatergoryId, setSelectedCatergoryId] = useState();
  let navigate = useNavigate();

  const handleCategoryChange = (id) => {
    if (selectedCatergoryId === id) {
      setSelectedCatergoryId(null);
    } else {
      setSelectedCatergoryId(id);
      navigate(`/unittypes/${id}`);
    }
  };

  return (
    <div>
      <div className="product-listing">
        <div className="settings-content">
          <NavSettings
            handleCategoryChange={handleCategoryChange}
          ></NavSettings>
        </div>
        <div className="main-content">
          <SettingsForm />
        </div>
      </div>
    </div>
  );
};

export default Settings;
