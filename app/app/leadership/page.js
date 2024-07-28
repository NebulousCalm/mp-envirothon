/* leadership page */
import TopNav from '../topnav.js';
import Footer from '../footer.js'

export default function Leadership(){
  return(
    <main>
      <TopNav />
        <div className="table-container">
            <table>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Contact</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Zachary Richman</td>
                    <td>zjrichman@outlook.com</td>
                </tr>
                <tr>
                    <td>Komal Yavagal</td>
                    <td>[empty]</td>
                </tr>
                <tr>
                    <td>Teagan Lynch</td>
                    <td>[empty]</td>
                </tr>
                <tr>
                    <td>Ginevra Voltolina</td>
                    <td>[empty]</td>
                </tr>
                <tr>
                    <td>Joseph Holland</td>
                    <td>[empty]</td>
                </tr>
                </tbody>
            </table>
        </div>
      <Footer />
    </main>
  );
}