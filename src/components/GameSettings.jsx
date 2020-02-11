import React from "react";
import { useTranslation, withTranslation, Trans } from 'react-i18next';

const GameSettings = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor=""></label>
        <input type="email" className="form-control" />
        
          <small className="from-text text-muted">
            {t("Welcome to React")}
          </small>
        
      </div>
      <div className="from-group"></div>
      <div className="form-group from-check"></div>
      <button className="btn btn-primary btn-black">Submit</button>
    </form>
  );
};


export default GameSettings;
