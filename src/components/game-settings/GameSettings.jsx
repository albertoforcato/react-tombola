import React from "react";
import AutomaticDrawSwitch from "./AutomaticDrawSwitch";
import CheckboxPrizesList from "./CheckboxPrizesList";
import { useTranslation } from "react-i18next";
const GameSettings = () => {
  const { t } = useTranslation();
  
  return (
    <form>
      <div className="form-group">
        <small className="form-check-label">
          {t("welcome-page.settings-checkbox-tip")}
        </small>
        <div className="row">
          <CheckboxPrizesList />
        </div>
      </div>
      <div className="form-group d-flex flex-wrap">
        <AutomaticDrawSwitch />
      </div>
    </form>
  );
};

export default GameSettings;
