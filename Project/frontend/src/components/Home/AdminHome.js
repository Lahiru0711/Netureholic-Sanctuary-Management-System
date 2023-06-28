import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function AdminHome() {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined" sx={{ height: 700, mb: 20 }}>
          <React.Fragment>
            <CardContent className=" bg-white">
              <div>
                <section class="text-gray-600 body-font overflow-hidden">
                  <div class="container px-10 py-24 mx-auto">
                    <div class="lg:w-full mx-auto flex flex-wrap shadow-lg flex justify-left border-t-4 border-slate-50">
                      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6  lg:mt-6">
                        <div>
                          <div
                            class="p-4 cursor-pointer bg-amber-400 delay-500 hover:bg-amber-500"
                            data-aos="fade-right"
                          >
                            <div onClick={() => navigate("/inventory")}>
                              <div class=" bg-gray-100 bg-opacity-75 px-8 pt-2 pb-16 rounded-lg overflow-hidden text-center relative">
                                <h1 class="title-font top-4 sm:text-3xl text-xl font-medium text-gray-900 mb-3">
                                  <div className="translate-y-8">
                                    Warehouse Management
                                  </div>
                                </h1>
                              </div>
                            </div>
                          </div>

                          <br />

                          <div
                            class="p-4 cursor-pointer bg-amber-600 delay-500 hover:bg-amber-700 "
                            data-aos="fade-right"
                          >
                            <div onClick={() => navigate("/B1_inventory")}>
                              <div class=" bg-gray-100 bg-opacity-75 px-8 pt-2 pb-16 rounded-lg overflow-hidden text-center relative">
                                <h1 class="title-font top-4 sm:text-3xl text-xl font-medium text-gray-900 mb-3">
                                  <div className="translate-y-8">
                                    Bungalow Management
                                  </div>
                                </h1>
                              </div>
                            </div>
                          </div>

                          <br />

                          {/*<div
                            class="p-4 cursor-pointer bg-amber-800 delay-500"
                            data-aos="fade-right"
                          >
                            <div onClick={() => navigate("/inventory")}>
                              <div class=" bg-gray-100 bg-opacity-75 px-8 pt-2 pb-16 rounded-lg overflow-hidden text-center relative">
                                <h1 class="title-font top-4 sm:text-3xl text-xl font-medium text-gray-900 mb-3">
                                  <div className="translate-y-8">
                                    Warehouse Management
                                  </div>
                                </h1>
                              </div>
                            </div>
                          </div>*/}
                        </div>
                      </div>
                      <div class=" ml-40 mt-12 mb-6 w-1/3">
                        <h1 class="title-font top-4 text-7xl font- text-teal-700 mb-3">
                          <div className="translate-y-8 text-center relative mt-12 delay-500" data-aos="fade-down" >
                            Welcome to<br/>Logistics<br/>Management
                          </div>
                        </h1>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </CardContent>
          </React.Fragment>
        </Card>
      </Box>
    </>
  );
}
