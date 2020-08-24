/** @jsx jsx */

import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { IClassDetail } from "../../Interfaces/ClassDetail";
import { StyledCard } from "./StyledCard";
import { jsx, css } from "@emotion/core";
import LoaderDesign from "../../Shared/Loader";
import authService from "../../services/authService";
import UserContext from "../../Context/authContext";

export const ClassCard = (props: any) => {
  const { user, setUser } = useContext(UserContext);
  console.log("token", user.token);
  const [value, setValue] = React.useState([{ name: "Aastha" }]);
  const [isLoading, setIsLoading] = React.useState(true);
  // let arh: [
  //   {
  //     _id: "5f0612d289d53c0794ad6aa9";
  //     className: "er5y";
  //     section: "reyhg";
  //     subject: "treghy";
  //     room: "rt";
  //     __v: 0;
  //   },
  //   {
  //     _id: "5f0612de89d53c0794ad6aaa";
  //     className: "grfedfredfg";
  //     section: "refgerdg";
  //     subject: "redfgredgfed";
  //     room: "refdgedrfged";
  //     __v: 0;
  //   }
  // ];

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://localhost:8000/user/classList", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmM2MwNTA0NWQ0NjYyNWI5MDI2OTMyOCIsImlhdCI6MTU5ODE5ODczMH0.43_OVJOwxqOZDn7yJCfF59ZQHvNodoXAcsHCOP-jJiI",
      },
    });
    const resData = await res.json();
    console.log("res", resData.classes);
    setValue([{ name: "abc" }]);

    setIsLoading(false);
    console.log("value1", value);
  };

  return (
    <Grid container direction="row">
      {isLoading && <LoaderDesign />}
      aastha
      {/* {arh.map((item, key) => (
        <Grid
          css={css`
            padding: 20px;
          `}
        >
          <StyledCard id={item._id}>
            <div
              css={css`
                font-family: "Google Sans", Roboto, Arial, sans-serif;
                font-size: 1.375rem;
              `}
            >
              {item.className}
            </div>
            <div>{item.section}</div>
          </StyledCard>
        </Grid>
      ))} */}
    </Grid>
  );
};
