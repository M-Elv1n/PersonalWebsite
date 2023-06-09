import React from 'react';
import human from "../../assert/img/home_page-boy.png";
import hand from "../../assert/img/home_page-hand.png";
import "./home.scss"

const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <div className="home--content">
                    <div className="home--image">
                        <img src={human} alt="" width={300} />
                    </div>
                    <div className="home--desc">
                        <h1>
                            <p>Hey there 👋</p>
                            <p>I am Amirhossein</p>
                        </h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id magnam provident laudantium porro asperiores? Ipsam maxime vel itaque ullam corrupti, molestiae velit et quas cum eaque repudiandae tenetur officia sit ducimus quasi porro alias animi est. Assumenda dignissimos non placeat eaque. Totam quisquam maiores facere! Laboriosam hic nostrum repellendus est impedit in non sit ut.</p>
                        <div className="home--desc__actions">
                            <button className="about">About me</button>
                            <button className="portfolios">😮Let's see portfolios</button>
                        </div>
                    </div>
                    <div className="home-deco">
                        <img src={hand} width={300} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home