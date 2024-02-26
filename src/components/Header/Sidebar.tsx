import {
  ChevronDownIcon,
  ChevronRightIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  PowerIcon,
  PresentationChartBarIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Alert,
  Card,
  Drawer,
  Input,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import useCategories from "../../hooks/useCategories";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

// interface Instrument extends Document {
//   name: string;
//   modelNumber: string;
//   category: string;
//   instrumentGroup: string;
//   price: number;
//   brand: string;
//   images: string[];
//   description: string;
//   quantity: number;
//   keywords: string[];
//   specifications: {
//     [key: string]: string | number;
//   };
// }

export function Sidebar() {
  const [open, setOpen] = useState<null | number>(null);
  // const [openAlert, setOpenAlert] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleOpen = (value: number) => {
    setOpen(open === value ? null : value);
  };
  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const { categories, isLoading, error } = useCategories();
  // console.log(isLoading);
  return (
    <>
      <Hamburger toggleDrawer={toggleDrawer} isOpen={isDrawerOpen} />
      <Drawer
        open={isDrawerOpen}
        className="bg-dark-solid"
        onClose={closeDrawer}
      >
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4 justify-between">
            <Logo />
            <Hamburger toggleDrawer={toggleDrawer} isOpen={isDrawerOpen} />
          </div>
          <div className="p-2">
            <Input
              crossOrigin=""
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
            />
          </div>
          <List className="min-h-[60vh] overflow-y-scroll scrollbar-none">
            {categories.map((category, index) => (
              <Accordion
                open={open === index}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 1 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === index}>
                  <AccordionHeader
                    onClick={() => handleOpen(index)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography className="mr-auto text-white font-normal">
                      {category.category}
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    {category.subCategories.map((sCategory, index) => (
                      <ListItem key={index}>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        {sCategory}
                      </ListItem>
                    ))}
                  </List>
                </AccordionBody>
              </Accordion>
            ))}
            <hr className="my-2 border-blue-gray-50" />
            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
          {/* <Alert
            open={openAlert}
            className="mt-auto"
            onClose={() => setOpenAlert(false)}
          >
            <CubeTransparentIcon className="mb-4 h-12 w-12" />
            <Typography variant="h6" className="mb-1">
              Upgrade to PRO
            </Typography>
            <Typography variant="small" className="font-normal opacity-80">
              Upgrade to Material Tailwind PRO and get even more components,
              plugins, advanced features and premium.
            </Typography>
            <div className="mt-4 flex gap-3">
              <Typography
                as="a"
                href="#"
                variant="small"
                className="font-medium opacity-80"
                onClick={() => setOpenAlert(false)}
              >
                Dismiss
              </Typography>
              <Typography
                as="a"
                href="#"
                variant="small"
                className="font-medium"
              >
                Upgrade Now
              </Typography>
            </div>
          </Alert> */}
        </Card>
      </Drawer>
    </>
  );
}
