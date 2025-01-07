import React from "react";
import "../css/Home.css";
import Form from "../components/Form";
function Home(){
    return (
        <div className="main-page">
            <div className="o-nas-tekst">
                <h1>O nas</h1>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                </p>
            </div>
            <div className="nasz-team-div">
                <h1>Nasz team</h1>
                <div className="czlonkowie-zespolu">
                    <div className="czlonek-zespolu">
                        <img  className="chlop" src="/images/profilowe/stec.jpg" alt="" />
                        <h2>Jakub Stec</h2>
                    </div>
                    <div className="czlonek-zespolu">
                        <img className="chlop" src="/images/profilowe/stec.jpg" alt="" />
                        <h2>Ernest Imiński</h2>
                    </div>
                    <div className="czlonek-zespolu">
                        <img class="kobieta" src="/images/profilowe/stec.jpg" alt="" />
                        <h2>Paulina Szuster</h2>
                    </div>
                    <div className="czlonek-zespolu">
                        <img  className="chlop" src="/images/profilowe/stec.jpg" alt="" />
                        <h2>Mateusz Mrowicki</h2>
                    </div>
                    <div className="czlonek-zespolu">
                        <img className="chlop" src="/images/profilowe/stec.jpg" alt="" />
                        <h2>Ernest Imiński</h2>
                    </div>
                    <div className="czlonek-zespolu">
                        <img className="kobieta" src="/images/profilowe/stec.jpg" alt="" />
                        <h2>Julia Putek</h2>
                    </div>
                </div>
            </div>
                <Form/>
        </div>
    );
}

export default Home;