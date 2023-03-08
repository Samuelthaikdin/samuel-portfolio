import React from "react";
import Image from "next/image";
import emojifypicture from "../images/Emojify-app.png";

function Emojifypage() {
  return (
    <div>
      <main>
        <div className="max-w-full px-10 md:px-20 xl:px-32 py-20">
          <div className="max-w-5xl mx-auto">
            <h1 className="mb-6 text-3xl xl:text-5xl font-extrabold xl:leading-tight text-white">
              A Fun and Immersive Way to Generate a Spotify Playlist Through
              Emojis
            </h1>
            <p class="text-xl text-gray-300 mx-auto">
              Emojify is a unique app designed to enhance the music streaming
              experience for Spotify users. The app offers an exciting and
              immersive way to generate playlists based on the user's current
              emotions or mood. With Emojiy, users can simply click on an emoji
              that best represents how they are feeling at the moment, and the
              app will curate a playlist tailored to their emotions. This
              innovative approach to playlist curation adds a fun and personal
              touch to music streaming, making it a must-have for all music
              lovers who want to explore their emotions through music.{" "}
            </p>
          </div>
        </div>
        <div className="max-w-full sm:px-10 md:px-20 xl:px-32 pb-20 relative">
          <div className="max-w-5xl px-10 md:px-0 mx-auto flex flex-col md:flex-row justify-between mb-4 space-y-3 md:space-y-0">
            <p className="text-sm text-neutral-300">
              Playlist generator page of our App
            </p>
          </div>
          <div className="flex items-center justify-center mb-10 relative">
            <Image
              src={emojifypicture}
              alt="Playlist geneartor page"
              className="inline-block align-top relative "
              width={1000}
              height={600}
            />
          </div>
          <div className="max-w-5xl px-10 md:px-0 mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-neutral-400 space-y-6 md:space-y-0">
              <div>
                <p className="font-medium text-white mb-2">Role</p>
                <p>UX/UI Designer</p>
                <p>UX researcher</p>
                <p>Front-End Developer</p>
              </div>
              <div>
                <p className="font-medium text-white mb-2">Scope</p>
                <p>Development</p>
                <p>Sketching &amp; wireframing</p>
                <p>Prototyping</p>
                <p>Usability testing</p>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="font-medium text-white mb-2">Industry</p>
                  <p>Education</p>
                </div>
                <div>
                  <p className="font-medium text-white mb-2">Timeline</p>
                  <p>Jan 2023 – Apr 2023</p>
                </div>
              </div>
              <div className="space-y-6  ">
                <div>
                  <p className="font-medium text-white mb-2">Team</p>
                  <p>Samuel T. Din</p>
                  <p>Jessica Noortrijanto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content Section*/}
        <div className="max-w-full px-10 md:px-20 xl:px-32 space-y-10 relative">
          <div class="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
            <h2 class="font-semibold text-lg sm:text-xl mb-6">
              The Project is still in works :)
            </h2>
            <div class="space-y-6 sm:text-lg text-neutral-600"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Emojifypage;
