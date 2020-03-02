import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { changePrizeActivation } from "../../actions/prizeAction";

/**
 * The checkbox list of tombola prizes.
 */
const CheckboxPrizesList = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const prizes = useSelector(state => state.managePrizesSettings.prizes);

  /**
   * This method handle changes from any checkbox in the list.
   * @param {object} event
   */
  const handleCheckChange = event => {
    dispatch(changePrizeActivation(parseInt(event.target.id)));
  };

  const list = prizes.map(prize => {
    return (
      <div
        className="col-lg-2 col-md-4 col-sm-6 col-12"
        key={`col-${prize.id}`}
      >
        <div className="custom-control custom-checkbox custom-control-inline">
          <input
            type="checkbox"
            className="custom-control-input"
            onChange={handleCheckChange}
            checked={prize.checked}
            id={prize.id}
          />
          <label htmlFor={prize.id} className="custom-control-label">
            {t(`welcome-page.prizes.${prize.name}`)}
          </label>
        </div>
      </div>
    );
  });

  return <>{list}</>;
};

export default CheckboxPrizesList;
