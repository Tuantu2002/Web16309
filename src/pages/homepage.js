import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewList from "../components/listhome";

const HomePage = {
  async runder() {
    return `
    <div class="container mx-auto"> 
    <header> ${Header.runder()}  </header>
    <div class="mt-4"> 
        ${Banner.runder()}
        </div>

        <div class="new" > 
        ${await NewList.runder()}
        </div>
    
    </div>
    <footer> ${Footer.runder()} </footer>
</div>

    
    `;
  },
};

export default HomePage;