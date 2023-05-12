import { useState } from "react";
import Homepage from "../components/Homepage";
import Categories from "../components/CategoriesPage";

const MainLayout = () => {
    const [home, setHome] = useState(true);
    const [categories, setCategories] = useState(false)
  return (
    <>
        {home ? <Homepage setHome={setHome} setCategories={setCategories} /> : <></>}
        {categories ? <Categories /> : <></>}
    </>
  );
};

export default MainLayout;