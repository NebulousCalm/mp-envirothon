import Image from "next/image";
import TopNav from "./topnav.js";
import Footer from "./footer.js";

export default function Home() {
  return (
    <main>
      <TopNav />
        <div className="landing-header">
          <Image src="/env-logo.png" width={250} height={250} className="landing-img"  alt="logo"/>

          <div className="landing-text-container">
            <h5><hr />MP ENVIROTHON</h5>
            <h1>Myers Park, <br />Envirothon Club</h1>
            <p>
              The <span>Envirothon®</span> is an environmental and natural resources conservation problem-solving,
              leadership experience and academic competition for high school students across the United States,
              Canada, China, and Singapore. Incorporating STEM principles, hands-on learning, and outdoor field experiences ,
              the Envirothon fosters student learning in the areas of <span>AQUATIC ECOLOGY</span>, <span>FORESTRY</span>, <span>SOILS and LAND USE</span>, <span>WILDLIFE</span>, and <span>CURRENT ENVIRONMENTAL ISSUES</span>.
            </p>
            <h4>Feel free to reach out about questions, or attend meetings.</h4>
          </div>
        </div>
      <Footer />
    </main>
  );
}