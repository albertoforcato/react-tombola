import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RotateCcw, RotateCw, Settings } from "react-feather";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addInitialNumbers, changeCurrentNumber } from "../actions/prizeAction";

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

const TombolaGame = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const currentNumber = useSelector(state=> state.currentNumber);

  //const initialNumbers2 = mathUtils.range(1, 90);
  const initialNumbers = mathUtils.range(1, 90);
  console.log(initialNumbers);
  const gameNumber = mathUtils.chunkArray(initialNumbers, 15);

  useEffect(() => {
    dispatch(addInitialNumbers(initialNumbers));
  });

  console.log(gameNumber);

  const handleNumberClick = e => {
    console.log(e);
    dispatch(changeCurrentNumber(e));
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

  const GameBoxes = () => {
    return (
      <div className="card">
        <div className="card-header">
          <div className="card-title">
            {t("actual-prize")}: {t(`${gameNumber[0]}`)}
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

  const SummaryBox = () => {
    return (
      <div className="card">
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">{t("last-draw-number")}</div>
                  </div>
                  <div className="card-body d-flex justify-content-center">
                    <StyledButton>
                      <div>{currentNumber}</div>
                    </StyledButton>
                  </div>
                  <div className="card-footer d-flex flex-wrap justify-content-between">
                    <div className="btn-group d-flex ">
                      <div
                        className="btn btn-sm btn-warning mx-1 my-1"
                        data-toggle="back-arrow"
                        title={t("go-back")}
                      >
                        <RotateCcw size="20" color="white" />
                      </div>
                      <div
                        className="btn btn-sm btn-warning mx-1 my-1"
                        data-toggle="forth-arrow"
                        title={t("go-forth")}
                      >
                        <RotateCw size="20" color="white" />
                      </div>
                    </div>
                    <div className="btn btn-sm btn-danger mx-1 my-1">
                      <Settings size="20" color="white" />
                    </div>
                  </div>
                </div>
              </div>
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
            <GameBoxes />
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
