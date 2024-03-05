"use client"

import React from "react";
import "../app/globals.scss"
import { Navbar } from "@/layouts/Navbar/page";
import { Footer } from "@/layouts/Footer/page";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"
import axios from "axios";
import { api } from "@/api/api";

const SignUp = () => {
  return (
    <>
        <Navbar />
            <div style={{backgroundImage: "url('https://images7.alphacoders.com/129/1291186.jpg')"}} className="w-full h-[100vh] bg-top bg-no-repeat bg-cover flex items-center justify-center">
            <Formik
                initialValues={{ fullname: '', driverLicense: '', email: '', password: '' }}
                validationSchema={Yup.object({
                    fullname: Yup.string().max(25, 'Must be 25 characters or less').required('Required'),
                    driverLicense: Yup.string().length(8).required('Required'),
                    email: Yup.string().email('Invalid email address').required('Required'),
                    password: Yup.string().uppercase().nonNullable().required('Required')
                })}
                onSubmit={(values, { resetForm }) => {
                    setTimeout(async () => {
                    await axios.post(`${api}/auth/register`, values);
                    resetForm();
                    }, 400);
                }}>
                    <Form className="w-[450px] bg-white rounded-xl p-7 flex flex-col gap-4">
                            <h2 className="text-2xl font-medium">Register</h2>
                            <Field name="fullname" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", outline: "none" }} className="w-full p-3 rounded-md" type="text" placeholder="Enter your fullname" />
                            <ErrorMessage name="fullname" />
                            <Field name="email" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", outline: "none" }} className="w-full p-3 rounded-md" type="text" placeholder="Enter your email" />
                            <ErrorMessage name="email" />
                            <Field name="driverLicense" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", outline: "none" }} className="w-full p-3 rounded-md" type="text" placeholder="Enter your driverLicenseCode" />
                            <ErrorMessage name="driverLicense" />
                            <Field name="password" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", outline: "none" }} className="w-full p-3 rounded-md" type="text" placeholder="Enter your password" />
                            <ErrorMessage name="password" />
                            <button id="sign" className="h-[45px] bg-[#1ECB15] rounded-md text-white text-xl font-medium">Sign In</button>
                            <p>Already have an account?</p>
                            <div className="flex justify-between gap-2 mt-2 items-center">
                                <div className="w-[120px] h-[1px] bg-[#4b5c7d]"></div>
                                <Link href={"/sign-in"} className="text-lg text-[#4b5c7d] cursor-pointer">Sign in here</Link>
                                <div className="w-[120px] h-[1px] bg-[#4b5c7d]"></div>
                            </div>
                        {/* <div className="p-20">
                            <button type="button" className="w-[150px] h-[150px] border border-gray-300 relative overflow-hidden" onClick={handleButtonClick}>
                                <img src="" alt="Upload Image" className="w-full h-full object-cover" />
                                <span className="absolute inset-0 flex items-center justify-center">Click to Upload</span>
                                <input type="file" className="hidden" onChange={handleFileChange} />
                            </button>
                        </div> */}
                    </Form>
                </Formik>
                
            </div>
        <Footer />
    </>
  );
};

export default SignUp;
