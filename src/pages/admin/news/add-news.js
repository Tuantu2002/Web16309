import axios from "axios";
import { add } from "../../../api/posts";
import NavAdmin from "../../../components/admin/NavAdmin";

/* eslint-disable linebreak-style */
const AdminAddNew = {
  runder() {
    return /* html */ `
        <div> ${NavAdmin.runder()} </div>
        
        <div class="max-w-5xl mx-auto">
      <div class="-my-0 sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <form id="form-add-post" action="#" method="POST" class=" ">
              <h2
                class="mt-6 text-center text-3xl font-normal uppercase font-sans text-gray-900">
                thêm sản phẩm
              </h2>
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label class="block">
                      <span
                        class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                        Tiêu đề
                      </span>

                      <input
                        id="title-post"
                        type="text"
                        name=""
                        class="mt-1 px-8 py-2 w-full bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder=""/>
                    </label>
                  </div>
                </div>

                <div>
                  <label
                    for="about"
                    class="block text-sm font-medium text-gray-700">
                    Mô Tả
                  </label>
                  <div class="mt-1">
                    <textarea
                      id="desc-post"
                      name="about"
                      rows="3"
                      class="mt-1 w-full px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder=""></textarea>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Cover photo
                  </label>
                </div>
                <div
                  class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true">
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <input
                          id="img-post"
                          name="file-upload"
                          type="text"
                          class="sr-only"/>
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

        `;
  },
  afterRender() {
    const formAdd = document.querySelector("#form-add-post");
    formAdd.addEventListener("submit", (e) => {
      e.preventDefault();
      add({
        title: document.querySelector("#title-post").value,
        img: document.querySelector("#img-post").value,
        desc: document.querySelector("#desc-post").value,
      });
      // fetch(" http://localhost:3002/post", {
      //     method: "POST",
      //     headers: {
      //         "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(post),
      // });
    });
  },
};

export default AdminAddNew;
