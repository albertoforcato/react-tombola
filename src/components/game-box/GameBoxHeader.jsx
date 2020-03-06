import React from "react";
import { useDispatch, useSelector } from "react-redux";
import gameUtils from "../../utils/gameUtils";
import { addAssignedPrize } from "../../actions/prizeAction";
import { useTranslation } from "react-i18next";

/**
 * The game box header contains the prizes information.
 */
const GameBoxHeader = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const checkedPrizes = useSelector(state =>
    gameUtils.getCheckedPrizes(state.managePrizesSettings.prizes)
  );

  const assignedPrizes = useSelector(state =>
    gameUtils.getNotNumbers(state.undoRedoManagement.present)
  );

  /**
   * Filters the checked prizes in state.
   */
  const availablePrizes = checkedPrizes.filter(
    prize => !assignedPrizes.includes(prize)
  );

  /**
   * Finds the next prize to show in game.
   */
  const nextPrize = availablePrizes.reduce(
    (prev, curr) => (prev.id < curr.id ? prev : curr),
    0
  );

  /**
   * Handles the award button click.
   */
  const handleAssignedPrizeClick = () => {
    dispatch(addAssignedPrize(nextPrize));
  };

  /**
   * Mandatory to prevent null award.
   */
  const canAward = availablePrizes.length > 1;

  const emptyPrizesList = availablePrizes.length === 0;

  return (
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <ul className="list-inline">
          <li className="list-inline-item">
            <h5 className="align-center text-muted">
              {t("game-page.actual-prize")}
            </h5>
          </li>
          <li className="list-inline-item">
            <h2
              className="align-center text-uppercase"
              style={{ letterSpacing: "0.03em" }}
            >
              {emptyPrizesList
                ? t(`welcome-page.no-prize`)
                : t(`welcome-page.prizes.${nextPrize.name}`)}
            </h2>
          </li>
        </ul>

        <button
          className="btn btn-info"
          onClick={handleAssignedPrizeClick}
          disabled={!canAward}
        >
          {t("generics.award")}
        </button>
      </div>
    </div>
  );
};

export default GameBoxHeader;