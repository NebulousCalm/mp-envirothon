/* leadership page */
import TopNav from '../topnav.js';
import Footer from '../footer.js'

export default function Meetings(){
    return(
        <main>
            <TopNav />
            <div className="table-container">
                <table>
                    <tbody>
                    <tr>
                        <td>Interest Meeting</td>
                        <td>To be determined. Most likely within the first week of the school year.</td>
                    </tr>
                    <tr>
                        <td>Meeting Schedule</td>
                        <td>To be determined closer to the start of the school year</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </main>
    );
}