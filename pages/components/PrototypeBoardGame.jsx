import React from "react";
import Image from "next/image";
import boardgame_picture from "../images/boardgame_picture.png";
import iteration_1 from "../images/iteration_1.jpg";
import iteration_2 from "../images/iteration_2.jpg";
function PrototypeBoardGame() {
  return (
    <div>
      <main>
        <div className="max-w-full px-10 md:px-20 xl:px-32 py-20">
          <div className="max-w-5xl mx-auto">
            <h1 className="mb-6 text-3xl xl:text-5xl font-extrabold xl:leading-tight text-white">
              Developing and Designing a Board game base on User Research
            </h1>
            <p class="text-xl text-gray-300 mx-auto">
              Introducing the Trial of Poseidon, a board game prototype
              developed during our UX research class. This game is designed for
              four players who navigate through Poseidon's disasters to reach
              the goal. The unique feature of this game is that players have the
              ability to create their own board by placing tile pieces with
              randomized types that have unique effects on the gameplay. The
              player's turn consists of resolving the tile, taking an action,
              and drawing a card at the end of the turn.{" "}
            </p>
          </div>
        </div>
        <div className="max-w-full sm:px-10 md:px-20 xl:px-32 pb-20 relative">
          <div className="max-w-5xl px-10 md:px-0 mx-auto flex flex-col md:flex-row justify-between mb-4 space-y-3 md:space-y-0"></div>
          <div className="flex items-center justify-center mb-10 relative">
            <Image
              src={boardgame_picture}
              alt="University of Toronto Davis Food Court"
              className="inline-block align-top relative "
              width={1000}
              height={600}
            />
          </div>
          <div className="max-w-5xl px-10 md:px-0 mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-neutral-400 space-y-6 md:space-y-0">
              <div>
                <p className="font-medium text-white mb-2">Role</p>
                <p>UX Designer</p>
                <p>UX Researcher</p>
              </div>
              <div>
                <p className="font-medium text-white mb-2">Scope</p>
                <p>Field studies</p>
                <p>Prototyping</p>
                <p>User Research</p>
                <p>Usability testing</p>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="font-medium text-white mb-2">Industry</p>
                  <p>Education</p>
                </div>
                <div>
                  <p className="font-medium text-white mb-2">Timeline</p>
                  <p>Sep 2022 – Dec 2022</p>
                </div>
              </div>
              <div className="space-y-6  ">
                <div>
                  <p className="font-medium text-white mb-2">Team</p>
                  <p>Samuel T. Din</p>
                  <p>Hai Nguyen</p>
                  <p>Josh Wong</p>
                  <p>Satoshi Kameyama</p>
                  <p>David Hong</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Content Section */}
        <div className="max-w-full px-10 md:px-20 xl:px-32 space-y-10 relative">
          <div class="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
            <h2 class="font-semibold text-lg sm:text-xl mb-6">Methodology</h2>
            <div class="space-y-6 sm:text-lg text-neutral-600">
              <p>
                Introducing "Trials of Poseidon": A Dynamic 4-Player Board Game
                Adventure Embark on an exciting journey with our captivating
                board game, "Trials of Poseidon." This immersive 4-player
                experience invites participants to navigate treacherous waters,
                aiming to conquer challenges conjured by the mighty Poseidon
                himself. In this strategic contest, players craft their
                destinies by constructing the game board using uniquely
                randomized tile pieces, each harboring distinct effects that
                reshape the path to victory. The decision-making process is
                enhanced by a range of three diverse actions: "Row" (advance 3
                tiles), "Play Card," and "Equip" (activate an Equipment Card).
                Every move counts as participants masterfully navigate the
                ever-evolving map, adapting to its myriad effects.
              </p>
              <p>
                The heart of the gameplay involves carefully managing resources,
                with each player entrusted with three heart tokens symbolizing
                their health. Exhaust all hearts, and a missed turn awaits,
                adding an extra layer of urgency to the quest. Our meticulous
                design process includes rigorous user testing with multiple
                groups, refining the game based on insightful player feedback.
                Comprehensive rules and engaging player interactions take center
                stage, eliminating any confusion surrounding gameplay mechanics.
                Interaction among participants is fostered through a wealth of
                Action, Equipment, and Reaction cards, enriching the experience.
              </p>
              <p>
                In response to gameplay dynamics, we've meticulously crafted not
                one, but two iterations of the game, each more refined than the
                last. The evolution is evident in the enhanced movement system
                for Poseidon and the expanded assortment of unique cards,
                creating a balanced interplay between players and challenges.
                Tested, timed, and meticulously observed, "Trials of Poseidon"
                has captivated the attention of peers and enthusiasts alike,
                earning its place as a favorite among our peers and the esteemed
                EGO members. This remarkable journey of improvement showcases
                our dedication to delivering a thrilling and polished gaming
                experience. Designed for ages 16 and above, "Trials of Poseidon"
                promises hours of strategic fun, offering an immersive escape
                into a world of myth and strategy.
              </p>
            </div>
          </div>
          <div class="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
            <h2 class="font-semibold text-lg sm:text-xl mb-6">
              Observations & User Testings
            </h2>
            <div class="space-y-6 sm:text-lg text-neutral-600">
              <p>
                Our exploration of "Trials of Poseidon" involved two
                user-testing sessions on November 14 and 21, 2022. These
                sessions engaged 12 participants, grouped into three teams of
                four, along with four Erindale Gaming Organization (EGO) board
                game club members. Each session spanned 27 to 35 minutes,
                capturing vital user insights, including:
                <li>
                  Participant Feedback: Gathering general comments for holistic
                  impressions.{" "}
                </li>
                <li>
                  Challenges: Identifying user struggles to refine the
                  experience.
                </li>
                <li>
                  Engagement: Noting preferred elements of the game board.{" "}
                </li>
                <li>Balance: Assessing</li>
                card and ability equilibrium.
                <li className="font-semibold">
                  Visuals: Gauging reactions to card appearances.
                </li>
              </p>
              <p>
                Sessions began with rule readings, evolving after an initial
                hiccup. Moderators supported gameplay, and keen note-takers
                tracked emotions, playability, and potential improvements. Our
                observations embraced participant dialogues, guiding design
                decisions. Post-playtesting, online questionnaires facilitated
                additional feedback. Our commitment to refining "Trials of
                Poseidon" through rigorous user testing fuels our journey
                towards a resonant gaming experience.{" "}
              </p>
            </div>
          </div>
          <div class="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
            <h1 class="font-semibold text-lg sm:text-xl mb-6">
              Game Iterations
            </h1>
            <div class="space-y-6 sm:text-lg text-neutral-600">
              <h2 class="font-bold">Iteration 1</h2>
              <Image
                src={iteration_1}
                alt="University of Toronto Davis Food Court"
                className="inline-block align-top relative "
                width={1000}
                height={600}
              />
              <p>
                The first major iteration of our board game which was used for
                the first in-class playtest. There was no feedback at this
                stage.
              </p>
              <p class="font-bold">Minor Changes</p>
              <li>
                <span className="font-semibold">
                  There were too many duplicate cards:{" "}
                </span>{" "}
                We decided to remove half of the cards that showed up too much.
              </li>
              <li>
                <span className="font-semibold"> The God was too weak:</span> We
                made it so Poseidon would automatically move once per turn,
                rather than move purely from a card draw. This was an attempt to
                speed up the game and make it more difficult.
              </li>
            </div>

            <div class="space-y-6 sm:text-lg text-neutral-600">
              <h2 class="font-bold py-5">Iteration 2</h2>
              <Image
                src={iteration_2}
                alt="University of Toronto Davis Food Court"
                className="inline-block align-top relative "
                width={1000}
                height={600}
              />
              <p>
                This phase marks a substantial reimagining of our game's
                mechanics and systems. Following a challenging initial playtest
                that revealed significant playability issues, we embarked on a
                journey of transformation. Our focus was on integrating changes,
                introducing new features, and removing elements to elevate the
                user experience. Driven by the goal of enhancing playability,
                our approach hinged on iteration. We addressed the stumbling
                blocks identified during the first playtest, propelling our
                design in new directions. This overhaul spans various aspects,
                each contributing to the overall user experience.
              </p>
              <p>
                By seamlessly weaving user insights into design refinements,
                we've fostered an evolved gaming environment that prioritizes
                engagement and interaction. This phase of evolution underscores
                our dedication to crafting a resonant gaming experience while
                highlighting the iterative nature of UX refinement.
              </p>
              <p class="font-bold">Issues & Changes:</p>
              <li>
                <span className="font-semibold">
                  Inadequate Strength of God Element:{" "}
                </span>{" "}
                The initial observation highlighted a disparity in the impact of
                the God element, particularly the character Poseidon. To rectify
                this, a substantial redesign was implemented. A new movement
                system was meticulously crafted for Poseidon, accompanied by the
                introduction of a diversified set of{" "}
                <span className="font-bold">Disaster cards</span>, enriching the
                main threat. This strategic overhaul aimed not only to elevate
                the level of difficulty but also to infuse an enhanced sense of
                enjoyment.{" "}
              </li>
              <li>
                <span className="font-semibold">
                  Underutilized Player Movement Tokens:{" "}
                </span>{" "}
                The ineffective engagement of player movement tokens from the
                first iteration surfaced as a significant concern. To address
                this, a transformative decision was made to entirely remove
                these tokens from the gameplay. In their place emerged a novel
                movement mechanism intricately integrated with a revamped Player
                Turn Order system. This dual-purpose innovation not only
                reinvigorated the player's journey but also resolved the
                perceived monotony associated with movement mechanics.
              </li>

              <li>
                <span className="font-semibold">
                  Enhancing Enjoyment and Engagement:{" "}
                </span>{" "}
                The pivotal challenge of enriching the game's entertainment
                value and addressing perceived monotony prompted a series of
                strategic augmentations within the board game's framework:
                <ol class="pl-5 mt-2 space-y-1 list-decimal list-inside">
                  <li className="">
                    <span className="font-semibold">
                      Event Tiles Introduction:{" "}
                    </span>
                    Aiming to inject an additional layer of strategic depth, we
                    introduced event tiles. These tiles provide players with
                    dynamic challenges and opportunities, requiring careful
                    consideration to navigate successfully. This enhancement was
                    driven by the intention to infuse more meaningful
                    decision-making and unpredictability into the gameplay.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Redesigned Map with Player Agency:
                    </span>{" "}
                    The map underwent a comprehensive redesign, accompanied by
                    an innovative feature that empowers players to construct
                    their own gaming landscapes. This not only establishes a
                    more immersive interaction between players and the board but
                    also fosters a heightened sense of engagement by allowing
                    players to shape their journey.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Card Overhaul and Innovation:
                    </span>{" "}
                    A significant number of cards underwent redesign or creation
                    to align with the new mechanics. Notably, the introduction
                    of two novel card categories, Reaction and Equipment cards,
                    served as catalysts for increased player interaction and
                    strategic planning. These cards were carefully designed to
                    encourage dynamic gameplay and proactive decision-making.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Thematic Board Transformations:
                    </span>{" "}
                    To augment the immersive experience, thematic adjustments
                    were incorporated into the game board's visual elements.
                    This strategic alteration aimed to immerse players further
                    into the narrative, conveying the urgency of fleeing from
                    Poseidon. By leveraging thematic shifts, we aimed to create
                    a more emotionally resonant and captivating atmosphere.
                  </li>
                </ol>
                <p className="py-5">
                  {" "}
                  Collectively, these iterative enhancements underscore our
                  dedication to fostering an enjoyable and engaging gameplay
                  experience. By incorporating strategic elements, amplifying
                  player agency, and introducing new avenues for interaction,
                  we've embarked on a journey to transform perceived monotony
                  into dynamic excitement.
                </p>
              </li>
            </div>
          </div>
          <div class="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
            <h2 class="font-semibold text-lg sm:text-xl mb-6">Next Steps</h2>
            <div class="space-y-6 sm:text-lg text-neutral-600">
              <p className="font-semibold">
                This board game was created for intention of learning and the
                research was conducted during a user experience design course
                and, although it was not intended to reach production, our team
                learned several valuable lessons from the process:
              </p>
              <p>
                Our journey forward with Trials of Poseidon is marked by a
                commitment to a more comprehensive user-centric approach. To
                propel the game towards potential market readiness, we are
                placing a heightened emphasis on the refinement of our
                play-testing methodology through in-depth questionnaires. The
                intent behind this initiative is twofold: first, to gather
                extensive data encompassing both positive and negative facets of
                the game, and second, to ensure the user-friendliness and
                thematic appeal of our design choices. As we contemplate the
                possibility of entering the market, this data will play a
                pivotal role in validating and enhancing the user experience.
                The initial classroom testing served as a promising foundation,
                suggesting the trajectory towards a successful board game.
              </p>
              <p>
                However, we recognize that more nuanced insights are essential
                to establish the game's accessibility across a broader
                demographic spectrum. We aim to transcend the confines of the
                age bracket and explore the potential of catering to players of
                all ages, steering away from exclusivity. The diversity of our
                testers, primarily avid fans and hobbyist board game players,
                prompts us to delve deeper into understanding how Trials of
                Poseidon resonates with a younger audience. In this pursuit, we
                envision a trajectory akin to iconic board games such as "Ticket
                to Ride" or "Monopoly," where multiple iterations and thematic
                expansions unlock new dimensions of engagement. Drawing
                inspiration from the rich realm of Greek Gods, we aspire to
                infuse fresh life into the game by introducing other deities
                like Zeus, Hermes, and Hades.{" "}
              </p>
              <p>
                Summing up this journey of iterative refinement, our current
                version of Trials of Poseidon holds the potential to captivate
                both casual players and dedicated hobbyists alike. The path
                ahead is paved with an unwavering focus on inclusivity,
                data-driven enhancements, and thematic expansions. By embracing
                these principles, we are poised to transform Trials of Poseidon
                into a versatile and enduring board game that resonates across
                diverse player profiles, all while staying true to our
                commitment to the hobbyist gaming community.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PrototypeBoardGame;
