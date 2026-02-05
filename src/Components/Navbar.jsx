import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, InputBase } from "@mui/material";
import { NavigationMenu } from "@base-ui/react/navigation-menu";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import departments from "../data/departments";
import { useGetAllCategoriesbyDeptQuery } from "../Store/categoryapi";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState("");
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);

  const { data: categories } = useGetAllCategoriesbyDeptQuery(
    selectedDepartmentId,
    {
      skip: !selectedDepartmentId,
    },
  );

  const closeMenu = () => {
    setActiveMenu("");
    setSelectedDepartmentId(null);
  };

  return (
    <header className="header">
      {/* Black overlay */}
      {activeMenu && <div className="nav-overlay" onMouseEnter={closeMenu} />}
      <nav className="navbar">
        {/* LOGO */}
        <Box className="navbar__left">
          <img
            className="navbar__logo"
            src="src/assets/images/logo.png"
            alt="logo"
          />
        </Box>

        {/* NAVIGATION */}
        <NavigationMenu.Root
          className="nav-menu"
          value={activeMenu}
          onValueChange={setActiveMenu}
          onMouseLeave={closeMenu} // ✅ CLOSE ON MOUSE LEAVE
        >
          <NavigationMenu.List className="nav-menu__list">
            {departments.map((department) => (
              <NavigationMenu.Item
                key={department._id}
                value={department._id} // ✅ FIXED BUG
                className="nav-menu__item"
                onMouseEnter={() => setSelectedDepartmentId(department._id)}
              >
                <NavigationMenu.Trigger className="nav-menu__trigger">
                  {department.department_name}
                </NavigationMenu.Trigger>

                <NavigationMenu.Content
                  className="nav-menu__content"
                  // forceMount
                >
                  <ul className="nav-menu__dropdown">
                    {categories?.map((category) => (
                      <li key={category._id} className="dropdown-category">
                        <p className="dropdown-title">
                          {category.categoryName}
                        </p>
                        <ul className="dropdown-sublist">
                          {category.subCategories.map((subCategory) => {
                            return (
                              <li key={subCategory.id}>
                                <Link
                                  // to="#"
                                  to={`/${category.categorySlug}/${subCategory.slug}`}
                                  className="nav-menu__dropdown-link"
                                  onClick={closeMenu}
                                >
                                  {subCategory.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ))}

            {/* STUDIO */}
            <NavigationMenu.Item value="studio" className="nav-menu__item">
              <NavigationMenu.Trigger className="nav-menu__trigger">
                STUDIO
              </NavigationMenu.Trigger>

              <NavigationMenu.Content className="nav-menu__content">
                <p>Studio</p>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          </NavigationMenu.List>

          <NavigationMenu.Viewport className="nav-menu__viewport" />
        </NavigationMenu.Root>

        {/* SEARCH */}
        <Box className="navbar__right">
          <div className="navbar__search">
            <SearchOutlinedIcon sx={{ color: "#696e79", fontSize: "20px" }} />
            <InputBase
              placeholder="Search for products, brands and more"
              sx={{ fontSize: "14px", width: "100%" }}
            />
          </div>
        </Box>

        {/* ACTIONS */}
        <Box className="navbar__actions">
          <Link className="navbar__actions__action">
            <PermIdentityIcon />
            <p>Profile</p>
          </Link>
          <Link className="navbar__actions__action">
            <FavoriteBorderIcon />
            <p>Wishlist</p>
          </Link>
          <Link className="navbar__actions__action">
            <ShoppingBagOutlinedIcon />
            <p>Bag</p>
          </Link>
        </Box>
      </nav>
    </header>
  );
}
