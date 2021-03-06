// import React from "react";

// const Coordination = ({ CoordinationData }) => {
//   return (
//     <section
//       className="text-white p-5 mb-2"
//       style={{ "background-color": "#1B4164" }}
//     >
//       <div
//         id="carouselExampleIndicators"
//         class="carousel slide"
//         data-ride="carousel"
//       >
//         <ol class="carousel-indicators">
//           <li
//             data-target="#carouselExampleIndicators"
//             data-slide-to="0"
//             class="active"
//           ></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//         </ol>
//         <div class="carousel-inner">
//           {CoordinationData.map((item, index) => {
//             return (
//               <div className={`carousel-item ${index == 1 ? "active" : ""}`}>
//                 {`carousel-item ${index == 1 ? "active" : "non active"}`}
//                 <img className="d-block" src={item.img} alt="Second slide" />
//               </div>
//             );
//           })}
//         </div>
//         <a
//           class="carousel-control-prev"
//           href="#carouselExampleIndicators"
//           role="button"
//           data-slide="prev"
//         >
//           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span class="sr-only">Previous</span>
//         </a>
//         <a
//           class="carousel-control-next"
//           href="#carouselExampleIndicators"
//           role="button"
//           data-slide="next"
//         >
//           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//           <span class="sr-only">Next</span>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Coordination;

import React from "react";
const code1 = "code1.jpg";
const code2 = "code2.jpg";

const Coordination = () => {
  return (
    <section
      className="text-white p-5 mb-2"
      style={{ "background-color": "#1B4164" }}
    >
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block" src={code1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block" src={code2} alt="Second slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
};

export default Coordination;
