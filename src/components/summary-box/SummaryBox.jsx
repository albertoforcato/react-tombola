import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { ActionCreators as UndoActionCreators } from "redux-undo";
import { RotateCcw, RotateCw, Settings } from "react-feather";
import mathUtils from "../../utils/mathUtils";
import { addDrewNumber } from "../../actions/prizeAction";

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

const SummaryBox = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const presentStateDrawNumbers = useSelector(
    state => state.drewNumbers.present
  );
  const [loadingNumber, setLoadingNumber] = useState(false);

  const canUndo = useSelector(state => state.drewNumbers.past.length) > 0;
  const canRedo = useSelector(state => state.drewNumbers.future.length) > 0;
  //console.log(canUndo, canRedo);

  const automaticDraw = useSelector(
    state => state.managePrizesSettings.automaticDraw
  );
  console.log("AUTOMATIC DRAW", automaticDraw);

  const drewNumbers = useSelector(state => state.drewNumbers.present);
  //console.log(drewNumbers);
  const availableNumbers = useSelector(
    state => state.manageDrewNumbers.availableNumbers
  );
  //console.log(availableNumbers);

  const presentNumber =
    presentStateDrawNumbers[presentStateDrawNumbers.length - 1];

  const handleBackArrowClick = () => {
    //console.log("UNDO");
    dispatch(UndoActionCreators.undo());
  };

  const handleForthArrowClick = () => {
    //console.log("REDO");
    dispatch(UndoActionCreators.redo());
  };

  const handleSettingsClick = () => {
    //console.log("SETTINGS");
    //props.toggle();
  };

  const handleAutomaticDrawClick = () => {
    setLoadingNumber(true);
    let drawableNumbers = availableNumbers.filter(
      el => !drewNumbers.includes(el)
    );
    let drewNumber = mathUtils.randomNumber(drawableNumbers);
    dispatch(addDrewNumber(drewNumber));
    console.log(drewNumber);
    setLoadingNumber(false);
    // SET FUNCTION WITH TIMEOUT <- loading number: false
  };

  const SummaryBoxManageButtons = () => {
    return (
      <div className="card border-0">
        <div className="card-body">
          <div className="container">
            <div className="row justify-content-between">
              <div className="btn-group d-flex ">
                <button
                  className="btn btn-sm btn-warning mx-1 my-1"
                  data-toggle="back-arrow"
                  title={t("game-page.go-back")}
                  onClick={() => handleBackArrowClick()}
                  disabled={!canUndo}
                >
                  <RotateCcw size="20" color="white" />
                </button>
                <button
                  className="btn btn-sm btn-warning mx-1 my-1"
                  data-toggle="forth-arrow"
                  title={t("game-page.go-forth")}
                  onClick={() => handleForthArrowClick()}
                  disabled={!canRedo}
                >
                  <RotateCw size="20" color="white" />
                </button>
              </div>
              <div className="btn btn-sm btn-danger mx-1 my-1">
                <Settings
                  size="20"
                  color="white"
                  onClick={() => handleSettingsClick()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SummaryBoxDraw = () => {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row justify-content-center">
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

  const SummaryBoxDrawFooter = () => {
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

  return (
    <div className="card border-0">
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col">
              <SummaryBoxDraw />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <SummaryBoxManageButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryBox;