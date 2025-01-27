import React from "react";
//= Components
import Split from "@/components/Common/Split";
//= Static Data
import ClientsData from "@/data/sections/clients.json";

function Clients2({ theme }) {
  return (
    <section className="clients sub-bg pt-50 pb-50">
      <h2 style={{ display: "none" }}>&nbsp;</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="row">
              {ClientsData.slice(0, 4).map((item) =>{
                return (
                  <div key={item.id} className="col-lg-3 brands">
                  <div className="item no-bord wow fadeIn" data-wow-delay=".3s">
                    <div className="img"  >
                      {theme === "light" ? (
                        <img  src={item.lightImage}  alt="" />
                      ) : (
                        <img width={200} src={item.darkImage}  alt="" />
                      )}
                      <Split>
                        <a
                          href="#0"
                          className="link words chars splitting"
                          data-splitting
                        >
                          {item.url}
                        </a>
                      </Split>
                    </div>
                  </div>
                </div>
                )
              } 
              
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients2;
