import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { addDrewNumber } from "../actions/prizeAction";
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
                  <div>{item}</div>
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
          <div className="col-md-6 my-1 col-12" key={`box-${box}`}>
            <div className="card" key={box}>
              <div className="card-body">
                <SingleItems array={mathUtils.chunkArray(box, 5)} />
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  const GameBoxHeader = () => {

    const checkedPrizes = useSelector(state => gameUtils.getCheckedPrizes(state.managePrizesSettings.prizes));
    console.log("AVAILABLE_PRIZES", checkedPrizes);

    const nextPrize = checkedPrizes.reduce((prev, curr) => prev.id < curr.id ? prev : curr);
    console.log("NEXT_PRIZE", nextPrize);
    //const availablePrizes

    return (
      <div className="card-title">
        <h5 style={{ display: "inline-block" }}>
          {t("game-page.actual-prize")}&nbsp;
        </h5>
        <h2 style={{ display: "inline-block" }}>
          {t(`welcome-page.prizes.${nextPrize.name}`)}
        </h2>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
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
