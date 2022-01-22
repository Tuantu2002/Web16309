import Navigo from "navigo";
import HomePage from "./pages/homepage";
import Aboutpage from "./pages/about";
import SingIn from "./pages/signin";
import SignUp from "./pages/signup";
import DetailPage from "./pages/detail";
import AdminAddNew from "./pages/admin/add";
import DashboardAdmin from "./pages/admin/news/dashboard";
import ListAdmin from "./pages/admin/news/listadmin";
import AdminEditNews from "./pages/admin/edit";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
  // console.log(content);
  // content trả về cho chúng ta 1 object(render và afterRender)
  document.querySelector("#app").innerHTML = await content.runder(id);
  if (content.afterRender) await content.afterRender();
};
router.on({
  "/": () => print(HomePage),
  // console.log("home page");
  "/signup": () => print(SignUp),
  "/signin": () => print(SingIn),
  "/admin/add": () => print(AdminAddNew),
  "/admin/edit/:id": ({ data }) => {
    const { id } = data;
    print(AdminEditNews.runder(+id));
  },

  // chi tiet bai viet
  "/detail/:id": ({ data }) => {
    const { id } = data;
    print(DetailPage.runder(+id));
  },
  "/list/news/admin": () => print(ListAdmin),
  "/admin/dashboard": () => print(DashboardAdmin),
});
router.resolve();
