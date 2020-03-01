import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import {
  changeAutomaticDrawState,
  changePrizeActivation
} from "../actions/prizeAction";
import InlineCheckboxList from "./generic-components/InlineCheckboxList";

const GameSettings = () => {
  const { t } = useTranslation();
  const prizes = useSelector(state => state.managePrizesSettings.prizes);
  
  const automaticDraw = useSelector(
    state => state.managePrizesSettings.automaticDraw
  );
  const dispatch = useDispatch();

  const handleSwitchChange = () => {
    dispatch(changeAutomaticDrawState());
  };

  return (
    <form>
      <div className="form-group">
      <small className="form-check-label">{t("welcome-page.settings-checkbox-tip")}</small>
        <div className="row">
        <InlineCheckboxList
          items={prizes}
          handleFunction={changePrizeActivation}
          labelTip={t("welcome-page.settings-checkbox-tip")}
          i18nPath="welcome-page.prizes"
        />
        </div>
        
      </div>

      <div className="form-group d-flex flex-wrap">
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            onChange={handleSwitchChange}
            defaultChecked={automaticDraw}
            id="automaticDrawSwitch"
          />
          <label className="custom-control-label" htmlFor="automaticDrawSwitch">
            {t("welcome-page.automatic-draw")}
          </label>
        </div>
      </div>

      {/* <div className="d-flex justify-content-center ">
        <Link to={`/tombola_game`} className="btn btn-primary text-wrap" type="submit">
          {t("welcome-page.start-the-game")}
        </Link>
      </div> */}
    </form>
  );
};

export default GameSettings;
