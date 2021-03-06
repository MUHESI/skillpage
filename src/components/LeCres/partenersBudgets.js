import React, { useReducer } from "react";

class SectionPartenairesBudgets extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="section2">
          <div className="row">
            <div
              className="col-lg-4 col-md-4 col-sm-6 line1 br-buttom"
              data-aos="fade-right"
            >
              <div className="div1">
                <span className="usd">USD</span>
                <div className="mil">3 Milliard</div>
                <span className="cap">CAPACITE DE FINANCEMENT </span>
              </div>
              <div className="div1">
                <div className="mil">
                  50+
                  <br />
                  PROJECTS
                </div>
              </div>
              <div className="div1">
                <div className="mil">200+</div>
                <span className="cap">AGENTS PERMANENTS</span>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 line1 br-buttom">
              <div className="div1">
                <span className="mil">4+ </span>
                <span className="usd"> ANS</span>
                <p className="cap">DE SERVICES ET D'EXPERIENCES </p>
              </div>
              <div className="div1">
                <div className="mil">200+</div>
                <span className="cap">AGENTS PERMANENTS</span>
              </div>
              <div className="div1">
                <div className="mil">500</div>
                <span className="cap">AGENTS SOUS CONTRAT</span>
              </div>
              <hr />
            </div>

            <div
              className="col-lg-4 col-md-4 col-sm-12 line1 br-buttom"
              data-aos="fade-left"
            >
              <div className="div1">
                <div className="mil">20+</div>
                <span className="cap">PARTENAIRES </span>
              </div>
              <div className="div1">
                <div className="mil">1000+</div>
                <span className="cap">JEUNES FORMES</span>
              </div>
              <div className="div1">
                <div className="mil">
                  3<br />
                  Programmes
                </div>
                <span className="cap">Ujuzi - Pamoja - Mchango</span>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SectionPartenairesBudgets;
