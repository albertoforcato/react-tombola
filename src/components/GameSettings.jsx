import React from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { changePrizeActivation } from "../actions/prizeAction";

const GameSettings = props => {
  const { t } = useTranslation();

  //console.log(props);
  const { prizes } = props;

  const handleCheckChange = e => {
    console.log(props, e.target.value);
    props.changePrizeActivation(parseInt(e.target.value));
    console.log(props);
  };

  const prizesList = prizes.map(prize => {
    return (
      <div className="from-check form-check-inline" key={prize.id}>
        <input
          type="checkbox"
          className="form-check-input"
          defaultChecked={prize.activated}
          onChange={handleCheckChange}
        />
        <label htmlFor={`gridCheck${prize.id}`} className="form-check-label">
          {prize.name}
        </label>
      </div>
    );
  });

  return (
    <form>
      <div className="form-group">
        <label className="form-check-label" htmlFor="inlineCheckbox1">
          {t("setting-tip")}
        </label>
      </div>
      <div className="form-group d-flex flex-wrap justify-content-lg-between justify-content-md-between justify-content-xs-center">
        {prizesList}
      </div>
      <div className="d-flex justify-content-center ">
        <button className="btn btn-primary text-wrap" type="submit" style={{}}>
          {t("start-the-game")}
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    prizes: state.prizes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePrizeActivation: id => {
      dispatch(changePrizeActivation(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameSettings);
