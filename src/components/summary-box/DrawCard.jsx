import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addDrewNumber } from "../../actions/prizeAction";
import mathUtils from "../../utils/mathUtils";
import { useTranslation } from "react-i18next";
import gameUtils from "../../utils/gameUtils";

/**
 * The last drew number div style.
 */
const StyledButton = styled.div`
  pointer-events: none;
  position: relative;
  width: 50%;
  padding-bottom: 50%;
  border-radius: 50%;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 6vw;
    transform: translate(-50%, -50%);
  }
`;

const SummaryBoxDrawFooter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const drewNumbers = useSelector(state =>
    gameUtils.getNumbers(state.undoRedoManagement.present)
  );
  const automaticDraw = useSelector(
    state => state.managePrizesSettings.automaticDraw
  );
  const availableNumbers = useSelector(
    state => state.manageDrewNumbers.availableNumbers
  );

  const drawableNumbers = () => {
    return availableNumbers.filter(el => !drewNumbers.includes(el));
  };

  /**
   * This function handle the automatic draw button.
   */
  const handleAutomaticDrawClick = () => {
    let drewNumber = mathUtils.randomNumber(drawableNumbers());
    dispatch(addDrewNumber(drewNumber));
    // SET FUNCTION WITH TIMEOUT <- loading number: false
  };

  return (
    <button
      className={`btn btn-success ${automaticDraw ? "" : "disabled"}`}
      style={{ pointerEvents: automaticDraw ? "" : "none" }}
      onClick={() => handleAutomaticDrawClick()}
    >
      {t("generics.draw")}
    </button>
  );
};

const DrawCard = () => {
  const { t } = useTranslation();
  const [loadingNumber, setLoadingNumber] = useState(false);
  const drewNumbers = useSelector(state =>
    gameUtils.getNumbers(state.undoRedoManagement.present)
  );
  const presentNumber = drewNumbers[drewNumbers.length - 1];

  return (
    <div className="card">
      <div className="card-body">
        <div className="row justify-content-center text-center">
          <h3 className="">{t("game-page.last-draw-number")}</h3>
        </div>
        <div className="row justify-content-center">
          <StyledButton className="my-4">
            {loadingNumber ? (
              "INSERT HTML CODE SPINNER"
            ) : (
              <div>{presentNumber == null ? "#" : presentNumber}</div>
            )}
          </StyledButton>
        </div>
      </div>
      <div className="card-footer border-0 d-flex flex-wrap justify-content-center">
        <SummaryBoxDrawFooter />
      </div>
    </div>
  );
};

export default DrawCard;
