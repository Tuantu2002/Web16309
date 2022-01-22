import Navigo from "navigo";

import DashboardAdmin from "./pages/admin/dashboard";
import NewsAdminList from "./pages/admin/news";
import AdminAddNew from "./pages/admin/news/add-news";
import AdminEditNews from "./pages/admin/news/news-edit";
import DetailPage from "./pages/detail";
import HomePage from "./pages/homepage";
import SingIn from "./pages/signin";
import SignUp from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
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
  "/list/news/admin": () => print(NewsAdminList),
  "/admin/dashboard": () => print(DashboardAdmin),
});

router.resolve();

// class TuongPhep {
//     constructor(name, congVatLy, congPhep) {
//         this.tenTuong = name;
//         this.congVatLyTuong = congVatLy;
//         this.congPhepTuong = congPhep;
//     }

//     showIntro() {
//         console.log(`
//         ten tuong la: ${this.tenTuong}
//         cong vat ly tuong la: ${this.congVatLyTuong}
//         cong phep tuong: ${this.congPhepTuong}
//         `);
//     }
// }
// const tuong1 = new TuongPhep("veera", 170, 0);
// const tuong2 = new TuongPhep("krixi", 159, 0);
// tuong1.showIntro();
// console.log(tuong2.showIntro());

// const API = "https://5e79b4b817314d00161333da.mockapi.io/posts";
// fetch(API)
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// async await

// const getProduct = () => new Promise((resolve,reject)={
//     setTimeout
// })
