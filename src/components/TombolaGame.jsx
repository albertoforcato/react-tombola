import React from "react";
import { useTranslation } from "react-i18next";
import { RotateCcw, RotateCw, Settings } from "react-feather";
import styled from "styled-components";

const StyledButton = styled.button`
  pointer-events: none;
  width: 150px;
  height: 150px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 75px;
  line-height: 1.33;
`;

const TombolaGame = () => {
  const { t } = useTranslation();

  const gameNumber = mathUtils.chunkArray(mathUtils.range(1, 90), 15);

  console.log(gameNumber);

  const SingleItems = ({ array }) => {
    return (
      <div key={array}>
        {array.map(chArray => (
          <div className="row d-flex justify-content-between" key={chArray}>
            {chArray.map(item => (
              <div
                className="btn btn-outline-warning col px-1 py-1 mx-1 my-1"
                key={item}
              >
                <div className="text-center my-auto">{item}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const SingleBox = ({ array }) => {
    return (
      <>
        {array.map(box => (
          <div className="card my-1 col-md-6 col-sm-12 col-12" key={box}>
            <div className="card-body px-2">
              <SingleItems array={mathUtils.chunkArray(box, 5)} />
            </div>
          </div>
        ))}
      </>
    );
  };

  const GameBoxes = () => {
    return (
      <div className="card px-2 py-2">
        {/* <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <div className="btn">
                  lol
                </div>
              </a>
            </li>
          </ul>
        </div> */}
        <div className="card-header">
          <div className="card-title">
            {t("actual-prize")}: {t(`${gameNumber[0]}`)}
          </div>
        </div>
        <div className="card-body px-2 py-2 mx-2 my-2">
          <div className="row">
            <SingleBox array={gameNumber} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-xl-7 col-md-8 col-12">
          <GameBoxes />
        </div>

        <div className="col-xl-4 offset-xl-1 offset-md-0 col-md-4 col-12">
          <div className="card">
            <div className="card-body">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">{t("last-draw-number")}</div>
                </div>
                <div className="card-body d-flex justify-content-center">
                  <StyledButton className="btn btn-primary">
                    43
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

export default TombolaGame;

const mathUtils = {
  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  chunkArray: (array, chunk_size) => {
    let results = [];
    while (array.length) {
      results.push(array.splice(0, chunk_size));
    }
    //console.log(results);
    return results;
  }
};
