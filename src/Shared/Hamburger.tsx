/** @jsx jsx */

import MenuIcon from "@material-ui/icons/Menu";
import { css, jsx } from "@emotion/core";
import { SideDrawer } from "./SideDrawer";
import React, { useState } from "react";
import { Modal } from "@material-ui/core";

export const Hamburger = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Modal
        closeAfterTransition
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <SideDrawer />
      </Modal>
      <div
        css={css`
          height: 100%;
          padding: 15px;
          color: #5f636;
        `}
      >
        <MenuIcon
          fontSize="large"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        ></MenuIcon>
      </div>
    </React.Fragment>
  );
};
