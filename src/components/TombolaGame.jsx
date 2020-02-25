import SummaryBox from "./SummaryBox";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addInitialNumbers, addDrewNumber } from "../actions/prizeAction";

const TombolaGame = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  //const initialNumbers2 = mathUtils.range(1, 90);
  const initialNumbers = mathUtils.range(1, 90);
  console.log(initialNumbers);
  const gameNumber = mathUtils.chunkArray(initialNumbers, 15);

  useEffect(() => {
    dispatch(addInitialNumbers(initialNumbers));
  }, []);

  console.log(gameNumber);

  const handleNumberClick = e => {
    console.log(e);
    dispatch(addDrewNumber(e));
  };

  const SingleItems = ({ array }) => {
    return (
      <div key={array}>
        {array.map(chArray => (
          <div className="container-fluid" key={`container-${chArray}`}>
            <div className="row justify-content-between" key={chArray}>
              {chArray.map(item => (
                <div
                  className="btn btn-outline-warning col mx-1 my-1"
                  key={item}
                  value={item}
                  onClick={() => handleNumberClick(item)}
                >
                  <div>{item}</div>
                </div>
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

  const GameBox = () => {
    return (
      <div className="card">
        <div className="card-header">
          <div className="card-title">
            {t("actual-prize")}: {t("tombola")}
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

  return (
    <div className="d-flex justify-content-center align-items-md-center">
      <div className="container-fluid">
        <div className="row my-2">
          <div className="col-xl-4  col-md-4 offset-md-0 col-12 order-md-1">
            <SummaryBox />
          </div>

          <div className="col-xl-8             col-md-8             col-12 order-md-0">
            <GameBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TombolaGame;

const mathUtils = {
  // create an array of numbers between min and max (right edge excluded)
  rangeRightEdgeExcluded: (min, max) =>
    [...Array(max - min)].map((_, i) => i + min),
  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  chunkArray: (array, chunk_size) => {
    let results = [];
    let c = [...array];
    while (c.length) {
      results.push(c.splice(0, chunk_size));
    }
    //console.log(results);
    return results;
  }
};
