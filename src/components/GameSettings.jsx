import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import {
  changeAutomaticDrawState,
  changePrizeActivation
} from "../actions/prizeAction";
import InlineCheckboxList from "./generic-components/InlineCheckboxList";
import { Link } from "react-router-dom";

const GameSettings = () => {
  const { t } = useTranslation();
  const prizes = useSelector(state => state.prizes);
  const automaticDraw = useSelector(state => state.automaticDraw);
  const dispatch = useDispatch();

  const handleSwitchChange = () => {
    dispatch(changeAutomaticDrawState());
  };

  return (
    <form>
      <div className="form-group">
        <InlineCheckboxList
          items={prizes}
          handleFunction={changePrizeActivation}
          labelTip={t("settings-checkbox-tip")}
        />
      </div>

      <div className="form-group d-flex flex-wrap">
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            onChange={handleSwitchChange}
            defaultChecked={automaticDraw}
            id="customSwitch1"
          />
          <label className="custom-control-label" htmlFor="customSwitch1">
            {t("automatic-draw")}
          </label>
        </div>
      </div>

      <div className="d-flex justify-content-center ">
        <Link to={`/tombola_game`} className="btn btn-primary text-wrap" type="submit">
          {t("start-the-game")}
        </Link>
      </div>
    </form>
  );
};

export default GameSettings;
