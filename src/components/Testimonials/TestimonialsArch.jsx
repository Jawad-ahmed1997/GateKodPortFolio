import React from 'react';
import ClientsData from "@/data/sections/clients.json";
console.log("Client Data",ClientsData)
const TestimonialsArch = ({ theme }) => {
  return (
    <section className="clients sub-bg ">
      <div className="container">
        <marquee behavior="" direction="">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-row justify-content-around">
                {ClientsData.slice(0, 7).map((item) => {
                  return (
                    <div key={item.id} className="brands mx-2">
                      <div className="item no-bord wow fadeIn" >
                        <div className="img">
                          <div>
                          <img src={item.lightImage} alt="client logo" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </marquee>
        
      </div>
    </section>
  );
};

export default TestimonialsArch;
