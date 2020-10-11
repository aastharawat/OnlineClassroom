/** @jsx jsx */

import MenuIcon from "@material-ui/icons/Menu";
import { css, jsx } from "@emotion/core";
import { SideDrawer } from "./SideDrawer";
import { useState } from "react";
import { Modal } from "@material-ui/core";
import styled from "@emotion/styled";

const StyledHamburger = styled(`div`)`
  @media (max-width: 800px) {
    display: flex;
    justify-items: flex-start;
  }
`;
export const Hamburger = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHamburger>
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
    </StyledHamburger>
  );
};
