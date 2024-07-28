/* membership page */
import TopNav from '../topnav.js';
import Footer from '../footer.js'

export default function Membership(){
  return(
    <main>
      <TopNav />
            <div className="text-container">
                <h1>Envirothon Requirements</h1>
                <ul>
                    <li>We recommend you to have taken or be in the process of taking an environmental science class.</li>
                    <li>Attend at least 80% of club meetings.</li>
                    <li>Compete or expect to compete by the end of the year.</li>
                    <li>Join the remind (mp.envithon)</li>
                </ul>
            </div>
      <Footer />
    </main>
  );
}