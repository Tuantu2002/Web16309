import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewsList from "../components/news";

const HomePage = {
    render() {
        return `
        
           <div>
           
             <Header>
               ${Header.render()}
              </Header>

             <main>

             <div>
             ${Banner.render()}
             </div>
             <div>
              ${NewsList.render()}
             </div>
             
             </main>
             <Footer>

              ${Footer.render()}
             </Footer>
           
           </div>
        
        `;
    },
};
export default HomePage;
