import React, { useState } from "react";
import styled from "styled-components";

const DivGlobHistory = styled.div`
  /* background-color: blue; */

  padding: 5px;
`;

const DivHistory = styled.div`
  margin: 0px;
  border-left: 1px solid white;

  button,
  button:hover,
  button:active,
  button:focus {
    transition: 1s;
    color: white;
    /* background-color: blue; */
    decoration: none;
    border: none;
    opacity: 0.7;
  }
  button:active,
  button:focus {
    transition: 1s;
    opacity: 1;
  }
`;

const deivDescriptionHist = styled.div`
  transition: 1.5s;
  color: white;
  text-align: justify;
  font-size: 1em;
  h2 {
    font-size: 1.5em;
    transition: 0.3s;
  }
`;
// top: ${({ IsOpen }) => (IsOpen ? "0" : "-100%")};   opacity: ${({ Isopacity }) => (Isopacity ? Isopacity : 0.5)};
//   <DropdownContainer IsOpen={IsOpen} onClick={toggle}>
const History = ({ HistoryData }) => {
  const tabHistories = HistoryData.yearsHistories;

  const [value, setFindHistory] = useState(1);
  const [Opacity, setFndHistory] = useState(1);

  return (
    <div className=" p-5  m-1 bloc-primary ">
      <DivGlobHistory className="row">
        <div className="col-sm-2 col-md-2 col-lg-2">
          {tabHistories.map((item) => (
            <DivHistory data-aos="fade-down">
              <button
                key={item.id}
                onClick={() => setFindHistory(item.id)}
                className="btn"
                Isopacity={Opacity}
              >
                {item.year}
              </button>
            </DivHistory>
          ))}
        </div>
        <deivDescriptionHist className="col-sm-8 col-md-8 col-lg-8 text-white">
          {tabHistories.map((element, index) => (
            <div>
              {element.id == value ? (
                <div>
                  <div>
                    <h2>{element.year} </h2>
                  </div>
                  {element.description}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </deivDescriptionHist>
      </DivGlobHistory>
    </div>
  );
};

export default History;
