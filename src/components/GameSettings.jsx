import React from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { changePrizeActivation } from "../actions/prizeAction";
import styled from "styled-components";

const InlineText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SinglePrize = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

const GameSettings = props => {
  const { t, i18n } = useTranslation();

  console.log(props);
  const { prizes } = props;

  const prizesList = prizes.map(prize => {
    return (
      <SinglePrize className="text disabled" key={prize.id}>
        <h4>{prize.name}</h4>
      </SinglePrize>
    );
  });

  return (
    <form>
      <InlineText className="form-group">{prizesList}</InlineText>
      <div className="form-group">
      <input id="ex13" type="text" data-slider-ticks="[0, 100, 200, 300, 400]" data-slider-ticks-snap-bounds="30" data-slider-ticks-labels='["$0", "$100", "$200", "$300", "$400"]'/>
      </div>
      <small className="from-text text-muted">{t("Welcome to React")}</small>
      <div className="from-group"></div>
      <div className="form-group from-check"></div>
      <button className="btn btn-primary btn-black">Submit</button>
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
