import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { changePrizeActivation } from "../actions/prizeAction";

const GameSettings = () => {
  const { t } = useTranslation();
  const prizes = useSelector(state => state.prizes);
  const dispatch = useDispatch();

  const handleCheckChange = e => {
    dispatch(changePrizeActivation(parseInt(e.target.id)));
  };

  const prizesList = prizes.map(prize => {
    return (
      <div
        className="custom-control custom-checkbox custom-control-inline"
        key={prize.id}
      >
        <input
          type="checkbox"
          className="custom-control-input"
          onChange={handleCheckChange}
          defaultChecked={prize.checked}
          id={prize.id}
        />
        <label htmlFor={prize.id} className="custom-control-label">
          {t(prize.name)}
        </label>
      </div>
    );
  });

  setInterval(() => console.log(prizes), 5000);

  return (
    <form>
      <div className="form-group">
        <div className="d-flex flex-wrap justify-content-lg-between justify-content-md-between justify-content-xs-center">
          {prizesList}
        </div>
        <small className="form-check-label">{t("settings-checkbox-tip")}</small>
      </div>

      <div className="form-group d-flex flex-wrap">
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
          />
          <label className="custom-control-label" htmlFor="customSwitch1">
            {t("automatic-draw")}
          </label>
        </div>
      </div>
      
      <div className="d-flex justify-content-center ">
        <button className="btn btn-primary text-wrap" type="submit">
          {t("start-the-game")}
        </button>
      </div>
    </form>
  );
};

export default GameSettings;
