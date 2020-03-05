import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { addDrewNumber, addAssignedPrize } from "../actions/prizeAction";
import mathUtils from "../utils/mathUtils";
import gameUtils from "../utils/gameUtils";

const GameBox = ({ gameNumber }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const drewNumbers = useSelector(state =>
    gameUtils.getNumbers(state.undoRedoManagement.present)
  );
  //console.log(drewNumbers);

  const handleNumberClick = number => {
    //console.log(number);
    dispatch(addDrewNumber(number));
  };
  const SingleItems = ({ array }) => {
    return (
      <div key={array}>
        {array.map(chArray => (
          <div className="container-fluid" key={`container-${chArray}`}>
            <div className="row justify-content-between" key={chArray}>
              {chArray.map(item => (
                <button
                  className={`btn btn-outline-warning col mx-1 my-1 ${
                    drewNumbers.includes(item) ? "active none" : ""
                    }`}
                  key={item}
                  value={item}
                  onClick={() => handleNumberClick(item)}
                  style={{
                    pointerEvents: drewNumbers.includes(item) ? "none" : ""
                  }}
                >
                  <div style={{fontSize:"calc(1.5em * (9/16))", fontWeight:"bold"}}>{item}</div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const SingleBox = ({ array }) => {
    return (
      <>
        {array.map(box => (
          <div className="col-md-6 my-3 col-12" key={`box-${box}`}>
            <div className="card border-0" key={box}>
                <SingleItems array={mathUtils.chunkArray(box, 5)} />
            </div>
          </div>
        ))}
      </>
    );
  };

  const GameBoxHeader = () => {
    const checkedPrizes = useSelector(state =>
      gameUtils.getCheckedPrizes(state.managePrizesSettings.prizes)
    );
    console.log("CHECKED_PRIZES", checkedPrizes);

    const assignedPrizes = useSelector(state =>
      gameUtils.getNotNumbers(state.undoRedoManagement.present)
    );
    console.log("ASSIGNED_PRIZES", assignedPrizes);

    const availablePrizes = checkedPrizes.filter(
      prize => !assignedPrizes.includes(prize)
    );
    console.log("AVAILABLE_PRIZES", availablePrizes);

    const nextPrize = availablePrizes.reduce((prev, curr) =>
      prev.id < curr.id ? prev : curr, 0
    );
    console.log("NEXT_PRIZE", nextPrize);
    //const availablePrizes

    const handleAssignedPrizeClick = () => {
      dispatch(addAssignedPrize(nextPrize));
    };

    const emptyPrizesList = availablePrizes.length === 0;

    /**
     * Mandatory to prevent null award.
     */
    const canAward = availablePrizes.length > 1;

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
                {emptyPrizesList ? t(`welcome-page.no-prize`) : t(`welcome-page.prizes.${nextPrize.name}`)}
              </h2>
            </li>
          </ul>

          <button className="btn btn-info" onClick={handleAssignedPrizeClick} disabled={!canAward}>
            {t("generics.award")}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card-header border-0">
        <GameBoxHeader />
      </div>
      <div className="card-body">
        <div className="container-fluid">
          <div className="row my-3">
            <SingleBox array={gameNumber} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBox;
