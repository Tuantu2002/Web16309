/* eslint-disable linebreak-style */
import Footer from "../components/footer";
import Header from "../components/header";
import data from "../data";

const DetailPage = {
    runder(id) {
        const result = data.find((post) => post.id == id);
        return /* html */ `
        <header> ${Header.runder()} </header>
            <div>
                <h1>${result.title} </h1>
                <img src="${result.img}"/>
                <p>${result.desc} </p>
                
            </div>

        <footer> ${Footer.runder()} </footer>
        `;
    },
};
export default DetailPage;
