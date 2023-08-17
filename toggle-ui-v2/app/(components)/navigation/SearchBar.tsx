"use client";

import Image from "next/image";
import { Formik, Field, Form } from "formik";

import MagnifyGlass from "./../../../asset/svgs/MagnifyGlass.svg";
import GitBranch from "./../../../asset/svgs/GitBranch.svg";

export const SearchBar = () => {
    function handleSearchSubmit(text: string) {}

    return (
        <Formik
            initialValues={{
                searchText: "",
            }}
            onSubmit={(values) => {
                // console.log(values.searchText);
                handleSearchSubmit(values.searchText);
            }}
        >
            <Form className="flex items-center pr-5">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Image src={GitBranch} alt="" className="w-5 h-5" />
                    </div>
                    <Field
                        id="searchText"
                        name="searchText"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                        placeholder="Search Toggle name..."
                    />
                </div>
                <button
                    type="submit"
                    className="p-2 ml-2 text-sm font-medium text-white bg-primary hover:bg-[#352ca6] rounded-lg border"
                >
                    <Image src={MagnifyGlass} alt="" className="w-6" />
                </button>
            </Form>
        </Formik>
    );
};
