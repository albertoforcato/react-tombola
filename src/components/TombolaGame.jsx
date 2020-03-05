import SummaryBox from "./summary-box/SummaryBox";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addInitialNumbers } from "../actions/prizeAction";
import mathUtils from "../utils/mathUtils";
import GameBox from "./GameBox";
import InitialGameSettingsModal from "./game-settings/InitialGameSettingsModal";
import InGameSettingsModal from "./game-settings/InGameSettingsModal";

const TombolaGame = () => {
  const dispatch = useDispatch();

  const initialNumbers = mathUtils.range(1, 90);
  const gameNumber = mathUtils.chunkArray(initialNumbers, 15);

  useEffect(() => {
    dispatch(addInitialNumbers(initialNumbers));
  });

  return (
    <div className="d-flex justify-content-center align-items-md-center">
      <div className="container-fluid">
        <div className="row my-2">
          <div className="col-xl-4 col-lg-4 col-12 order-lg-1">
            <SummaryBox />
          </div>
          <div className="col-xl-8 col-lg-8 col-12 order-lg-0">
            <GameBox gameNumber={gameNumber} />
          </div>
        </div>
        <InitialGameSettingsModal />
        <InGameSettingsModal />
      </div>
    </div>
  );
};

export default TombolaGame;
