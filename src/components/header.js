/* eslint-disable linebreak-style */
const Header = {
    runder() {
        return /* html */ `
        <div class="bg-indigo-900 py-8 ">

        <a href="#">
            <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/hawkeye_lob_log_def_01.png"
                alt="" width="150px" class="mx-auto">
        </a>

    </div>

    <div class="header-main bg-amber-600 flex ">
        <nav class="ml-6">
            <ul class="flex py-3" id="menu" >
                <li class="">
                    <a href="/"  class="text-white p-4 hover:text-pink-900">Trang Chủ</a>
                </li>
                <li class="">
                    <a href="/signup" class="text-white p-4 hover:text-pink-900">sign up</a>
                </li>
                <li class="">
                    <a href="/signin" class="text-white p-4 hover:text-pink-900">sign in</a>
                </li>
                <li class="">
                    <a href="/admin/dashboard" class="text-white p-4 hover:text-pink-900">Admin</a>
                </li>
            </ul>
        </nav>
        <div class="search flex ml-80 py-3">
            <input type="text"
                class=" h-6 pr-4 mr-2   placeholder:italic rounded-none placeholder:text-gray-400 block bg-white w-full border border-gray-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm ">
            <input type="button" value="tìm kiếm" class="border-2 bg-indigo-900 text-white uppercase h-6 px-8 ">
        </div>
    </div>


        `;
    },
};
export default Header;
