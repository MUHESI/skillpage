import React from "react";
import styled, { css } from "styled-components/macro";

const DivRecActGlob = styled.div`
  text-align: justify;
  padding: 10px;
  h2 {
    font-size: 1.4em;
    font-weight: bold;
  }
  h5 {
    font-size: 1em;
    font-weight: bold;
    padding: 1px;
  }
`;
const ItemProjectGlob = styled.div`
  border-bottom: 1px solid #121e58;
  margin-bottom: 10px;
  padding: 10px;
`;

const ItemProject = styled.div`
  text-align: justify;
  margin-bottom: 10px;

  h2 {
    font-size: 1.4em;
    font-weight: bold;
  }
  h5 {
    font-size: 1em;
    font-weight: bold;
    padding: 1px;
  }
`;
const RecentActivities = ({ RecentActivitiesData }) => {
  const RecentActivity = RecentActivitiesData.RecentActivity;
  const lastActivities = RecentActivitiesData.lisRecentActivities;

  return (
    <DivRecActGlob className=" bloc-dark">
      <div className="tilte">
        <h2>Activités recentes</h2>
      </div>
      <div className="row m-2">
        <div class="col-sm-12 col-md-6 col-lg-6" data-aos="fade-right">
          {RecentActivity.map((activity, v) => (
            <div className="">
              <div className="img-card">
                <img
                  className="img-fluid br-rect-white  br-circle-10"
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
            <ItemProjectGlob className="row m-1">
              <div className="col-sm-4 col-md-4 col-lg-4">
                <img
                  className="img-fluid  br-circle-10"
                  src={activity.img ? activity.img : "img/profile3.jpg"}
                />
              </div>
              <ItemProject className="col-sm-8 col-md-8">
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
              </ItemProject>
            </ItemProjectGlob>
          ))}
        </div>
      </div>
    </DivRecActGlob>
  );
};
export default RecentActivities;
