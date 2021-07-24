import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import baseURL from "./../../util/serverPath";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
const AdminHomePage = () => {
const loading=true

  const override = css`
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: #71efa3;
  `;
  const useFetch = (url) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      async function fetchData() {
       
        const response = await fetch(url);
        const result = await response.json();
        setData(result.data);
        setIsLoading(false);
      }
      fetchData();
      console.log("effect is running");
    }, [url]);
    return { data, isLoading };
  };
  const { data, isLoading } = useFetch(`${baseURL}/index`);
  /* console.log(data); */
  /* console.log(isLoading) */
  return (
    <Sidebar SidebarName="Home" className="pt-10">
      <div>
        <div className="h-20 grid grid-cols-3 grid-flow-row gap-4">
          <div className="pl-6 pt-6">
            {isLoading ? 
              <ClipLoader  loading={loading} css={override} size={150} /> :
              (
              <Card title="Product" number={data.product}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20  text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Card>
            )  }
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default AdminHomePage;

const Card = ({ children, title, number }) => {
  return (
    <div className="pattern-dots-md gray-light">
      <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  flex flex-row">
        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
          {children}
        </div>
        <div className="flex-grow flex">
          <h2 className=" text-xl title-font font-medium mb-3 text-gray-50 pl-10">
            {title} : {number}
          </h2>
        </div>
      </div>
    </div>
  );
};
