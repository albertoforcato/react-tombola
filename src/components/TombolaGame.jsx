import SummaryBox from "./summary-box/SummaryBox";
import React from "react";
import GameBox from "./game-box/GameBox";
import InitialGameSettingsModal from "./game-settings/InitialGameSettingsModal";
import InGameSettingsModal from "./game-settings/InGameSettingsModal";

/**
 * The main component of the game.
 */
const TombolaGame = () => {
  return (
    <div className="d-flex justify-content-center align-items-md-center">
      <div className="container-fluid">
        <div className="row my-2">
          <div className="col-xl-4 col-lg-4 col-12 order-lg-1">
            <SummaryBox />
          </div>
          <div className="col-xl-8 col-lg-8 col-12 order-lg-0">
            <GameBox />
          </div>
        </div>
        <InitialGameSettingsModal />
        <InGameSettingsModal />
      </div>
    </div>
  );
};

export default TombolaGame;
