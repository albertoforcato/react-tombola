import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAutomaticDrawState } from "../../actions/prizeAction";
import { useTranslation } from "react-i18next";

/**
 * The switch component to manage the automatic draw state.
 */
const AutomaticDrawSwitch = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const automaticDraw = useSelector(
    state => state.managePrizesSettings.automaticDraw
  );

  /**
   * This method handle the status changing of the automatic draw switch component.
   */
  const handleSwitchChange = () => {
    dispatch(changeAutomaticDrawState());
  };

  return (
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
  );
};

export default AutomaticDrawSwitch;
