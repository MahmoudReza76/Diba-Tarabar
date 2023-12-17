import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MobileMenu({ links }) {
  const pathname = usePathname();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        height: "50vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        gap: "5",
        paddingTop: "2rem",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {links.map((link) => (
        <div key={link.id} disablePadding>
          {pathname === link.href ? (
            <Link
              href={link.href}
              className="w-full bg-blue-500 flex justify-start p-2.5 rounded-lg text-white text-base "
            >
              {link.name}
            </Link>
          ) : (
            <Link
              href={link.href}
              className="text-right xl:px-5 xl:py-1.5  px-3 py-1.5 text-black text-opacity-80 text-base "
            >
              {link.name}
            </Link>
          )}
        </div>
      ))}

      <Divider />
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
