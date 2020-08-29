/** @jsx jsx */

import React, { useEffect, useContext, useState } from "react";
import authService from "../../services/authService";
import UserContext from "../../Context/authContext";
import { IClassDetail } from "../../Interfaces/ClassDetail";
import { jsx, css } from "@emotion/core";
import LoaderDesign from "../../Shared/Loader";
import { Grid } from "@material-ui/core";
import { StyledCard } from "./StyledCard";
export const ClassCard = () => {
  const { user } = useContext(UserContext);
  const [classes, setClasses] = useState<IClassDetail[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    fetchCards();
  });

  const fetchCards = async () => {
    authService.getClasses(user.token).then((res) => {
      setClasses(res.classes);
      setIsLoading(false);
    });
  };

  return (
    <Grid container item direction="row">
      {isLoading && <LoaderDesign />}
      {classes &&
        classes.map((item, key) => (
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
        ))}
    </Grid>
  );
};
