import React from "react";

const TombolaGame = () => {
  const gameNumber = mathUtils.chunkArray(mathUtils.range(1, 90), 15);

  console.log(gameNumber);

  const SingleItems = ({ array }) => {
    return (
      <div key={array}>
        {array.map(chArray => (
          <div
            className="row d-flex justify-content-between clearfix"
            key={chArray}
          >
            {chArray.map(item => (
              <div className="btn btn-outline-warning col" key={item}>
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
          <div className="card my-1 col-lg-6 col-md-12 col-12" key={box}>
            <div className="card-body">
              <SingleItems array={mathUtils.chunkArray(box, 5)} />
            </div>
          </div>
        ))}
      </>
    );
  };

  const GameBoxes = () => {
    return (
      <div className="card mx-2 my-2 px-2 py-2">
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
      <GameBoxes />
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
