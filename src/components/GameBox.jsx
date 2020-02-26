import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { addDrewNumber } from "../actions/prizeAction";
import mathUtils from "../utils/mathUtils";

const GameBox = ({ gameNumber }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const drewNumbers = useSelector(state => state.drewNumbers.present);
  //console.log(drewNumbers);
  const handleDrawState = n => {};

  const handleNumberClick = number => {
    //console.log(number);
    dispatch(addDrewNumber(number));
    handleDrawState(number);
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
                  data-toggle="button"
                  aria-pressed="false"
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

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          {t("game-page.actual-prize")}: {t("welcome-page.prizes.tombola")}
        </div>
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
