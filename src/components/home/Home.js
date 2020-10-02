import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://cf.bstatic.com/images/hotel/max1024x768/232/232147488.jpg"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep"
        />
        <Card
          src="https://skift.com/wp-content/uploads/2019/12/airbnb-plus-room-cape-town-1024x684.jpg"
          title="Online Experiences"
          description="A new way to travel from home"
        />
        <Card
          src="https://beyondphilosophy.com/wp-content/uploads/2019/10/0.jpg"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://www.itromso.no/nyhet/article20066947.ece/u18qna/ALTERNATES/w980-default/31NYHleilighetillustrasjon.jpg"
          title="3 bedroom flat in"
          description="Spaces that are more than just a place to sleep"
          price="$100/night"
        />
        <Card
          src="https://www.itromso.no/nyhet/article20066947.ece/u18qna/ALTERNATES/w980-default/31NYHleilighetillustrasjon.jpg"
          title="Penthouse in Oslo"
          description="Enjoy the amazing sights of Oslo with this stunning penthouse"
          price="$300/night"
        />
        <Card
          src="https://www.itromso.no/nyhet/article20066947.ece/u18qna/ALTERNATES/w980-default/31NYHleilighetillustrasjon.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="$70/night"
        />
      </div>
    </div>
  );
}

export default Home;
