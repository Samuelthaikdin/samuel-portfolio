import React from "react";
import Image from "next/image";
import boardgame_picture from "../images/boardgame_picture.png";
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
            <h2 class="font-semibold text-lg sm:text-xl mb-6">
              This Project is still in works :)
            </h2>
            <div class="space-y-6 sm:text-lg text-neutral-600">
              <p></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PrototypeBoardGame;
