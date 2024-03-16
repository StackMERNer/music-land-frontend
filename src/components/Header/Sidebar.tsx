import {
  ChevronDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { PowerIcon, PresentationChartBarIcon } from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  Drawer,
  Input,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useCategories from "../../hooks/useCategories";
import { DefaultSkeleton } from "../Skeletons/DefaultSkeleton";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

export function Sidebar() {
  const [open, setOpen] = useState<null | number>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleOpen = (value: number) => {
    setOpen(open === value ? null : value);
  };
  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const { categories, isLoading, error } = useCategories();

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
          {error && (
            <div className="text-white p-5 font-roboto">{error}</div>
          )}
          {isLoading && <DefaultSkeleton />}
          <List className="min-h-[60vh] overflow-y-scroll scrollbar-none">
            {categories.map((category, index) => (
              <Accordion
                key={index}
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
                      <Link
                        key={index}
                        state={{
                          category: category.category,
                          subCategory: sCategory,
                        }}
                        onClick={() => setIsDrawerOpen(false)}
                        to={`instruments?category=${category.category}&subCategory=${sCategory}`}
                      >
                        <ListItem>
                          <ListItemPrefix>
                            <ChevronRightIcon
                              strokeWidth={3}
                              className="h-3 w-5"
                            />
                          </ListItemPrefix>
                          {sCategory}
                        </ListItem>
                      </Link>
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
        </Card>
      </Drawer>
    </>
  );
}
