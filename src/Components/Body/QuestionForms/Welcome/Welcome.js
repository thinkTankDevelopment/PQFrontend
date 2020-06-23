import React from "react";
import Fade from "react-reveal/Fade";

import StartButton from "./StartButton";
import WelcomeHeader from "./WelcomeHeader";
function Welcome() {
  return (
    <Fade>
      <WelcomeHeader />
      <div>
        <section>
          <p>
            The <strong>PQ ROAMING SURVEY</strong> is a 21-question
            self-assessment unlike other personality quizzes. This is not
            corporate BS, business jargon, or filled with platitudes. This
            survey gets to the heart of the matter. It is based on a study
            conducted by a St. Joe’s University Professor of Management in
            conjunction with a methodology developed by Marco Greenberg in his
            book, Primitive: Tapping the Primal Drive that Powers the World’s
            Most Successful People. Research indicates that you’ll make more
            money and be more fulfilled the more you are able to tap into your
            primal drive. There are seven different types of “Primitives,” each
            with its own distinct qualities. This survey is meant to help stuck
            individuals feel empowered and liberated. It provides you with a
            lucid roadmap on how to start, reinvent, or recalibrate their
            careers. Likewise, this survey seeks to assist managers in becoming
            conductors, who can more effectively manage their teams. Take it by
            clicking <strong>“Begin Survey”</strong> below. And don’t forget,
            this is a spectrum. The world cannot blossom without civilized
            people! Civilized folks are key. But with the world changing right
            under our feet, it is now more important than ever to tap into our
            Primal sides.
          </p>
        </section>
      </div>

      <StartButton />
    </Fade>
  );
}

export default Welcome;
