import React from "react";
import BecomeMember from "./BecomeMember";
import styled, { css } from "styled-components/macro";
const SectionGlob = styled.div`
  padding: 5%;
`;
const Actualities = ({ ActualitiesData }) => {
  return (
    <SectionGlob>
      <div className="row"></div>
      <section>
        <BecomeMember />
      </section>
    </SectionGlob>
  );
};

export default Actualities;

/** 

--------------------------

  {ActualitiesData.map((actuality, v) => (
          <div className="col-sm-12 col-md-3 col-lg-3">
            <div class="card">
              <img
                class="card-img-top img-fluid"
                src={actuality.img ? actuality.img : "imgActuallyDefault"}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 className="card-title text-boldPrimary">
                  {actuality.title ? actuality.title : "titre default"}
                </h5>

                <p class="card-text">
                  {" "}
                  {actuality.smallbody ? actuality.smallbody : "CRES"}
                </p>
              </div>

              <div className="">
                <button className="btn btn-linkBlack">Read more...</button>
              </div>
            </div>
          </div>
        ))}
-------------------------

 

import React from "react";

const RecentActivities = ({ RecentActivitiesData }) => {
  const RecentActivity = RecentActivitiesData.RecentActivity;
  const lastActivities = RecentActivitiesData.lisRecentActivities;

  return (
    <div className=" bloc-dark">
      <div className="tilte text-boldPrimary p-1">
        <h2>Activités recentes</h2>
      </div>
      <div className="row m-2">
        <div class="col-sm-12 col-md-6 col-lg-6">
          {RecentActivity.map((activity, v) => (
            <div className="">
              <div className="img-card">
                <img
                  className="img-fluid br-rect-white  br-circle-15"
                  src={activity.img ? activity.img : "img/profile3.jpg"}
                />
              </div>
              <div className="card-body">
                <div className="card-title m-0">
                  <button className="btn btn-title-boldPrimary">
                    <h5>{activity.title ? activity.title : "titre default"}</h5>
                  </button>
                </div>
                {activity.smallbody
                  ? activity.smallbody
                  : "Notre mision technologies et recherche"}
              </div>
            </div>
          ))}
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6">
          {lastActivities.map((activity, v) => (
            <div className="row m-1">
              <div className="col-sm-4 col-md-4 col-lg-4">
                <img
                  className="img-fluid  br-circle-10"
                  src={activity.img ? activity.img : "img/profile3.jpg"}
                />
              </div>
              <div className="col-sm-8 col-md-8">
                <div className="card-title m-0">
                  <button className="btn btn-title-boldPrimary">
                    <h5>{activity.title ? activity.title : "titre default"}</h5>
                  </button>
                </div>
                <p className="card-text m-0">
                  {activity.smallbody
                    ? activity.smallbody
                    : "Notre mision technologies et recherche"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RecentActivities;
*/
