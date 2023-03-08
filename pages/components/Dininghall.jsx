import React from "react";
import Image from "next/image";
import dinninghall from "../images/dinninghallpage.png";
import IA from "../images/dinninghall_IA.png";
import prototype1 from "../images/prototype1.png";

function Dininghall() {
  return (
    <div>
      <main>
        <div className="max-w-full px-10 md:px-20 xl:px-32 py-20">
          <div className="max-w-5xl mx-auto">
            <h1 className="mb-6 text-3xl xl:text-5xl font-extrabold xl:leading-tight text-white">
              Research on Students's experience with the Campus Dinning Services
            </h1>
            <p class="text-xl text-gray-300 mx-auto">
              The University of Toronto Mississauga's three dining halls serve
              nearly 15,000 students daily, yet students face many challenges
              when purchasing their food. Wait times are long, lines are
              confusing, and checkout stations are understaffed. We aimed to
              understand student's frustrations while at a dining hall, and
              designed a new self-checkout system to create a more efficent
              experience.{" "}
            </p>
          </div>
        </div>
        <div className="max-w-full sm:px-10 md:px-20 xl:px-32 pb-20 relative">
          <div className="max-w-5xl px-10 md:px-0 mx-auto flex flex-col md:flex-row justify-between mb-4 space-y-3 md:space-y-0">
            <p className="text-sm text-neutral-300"></p>
          </div>
          <div className="flex items-center justify-center mb-10 relative">
            <Image
              src={dinninghall}
              alt="University of Toronto Davis Food Court"
              className="inline-block align-top relative "
              width={1000}
              height={400}
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
                  <p>Jan 2022 – Apr 2022</p>
                </div>
              </div>
              <div className="space-y-6  ">
                <div>
                  <p className="font-medium text-white mb-2">Team</p>
                  <p>Samuel T. Din</p>
                  <p>Jessica Noortrijanto</p>
                  <p>Satoshi Kameyama</p>
                  <p>Justin Sousa</p>
                  <p>Daanish Alvi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-full px-10 md:px-20 xl:px-32 space-y-10 relative">
          <div class="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
            <h2 class="font-semibold text-lg sm:text-xl mb-6">Challenge</h2>
            <div class="space-y-6 sm:text-lg text-neutral-600">
              <p>
                As campus dining services have been an integral part of the
                university environment, students have to rely on these services
                that are offered. With many students having classes that are
                dispersed throughout the day, having the ability to grab
                something quickly that also satisfies their hunger is
                fundamental. However, students often associate ordering food
                with feelings of anxiety and stress due to factors such as long
                lines, wait times, and the prices of food options. Therefore, we
                have implemented a mobile app idea to help students navigate,
                order ahead, and track their food orders at their fingertips.
              </p>
              <p>
                Our goal is to give students the option to manage their time and
                for students to have the ability to navigate food options on
                campus as well as having the ability to have a seamless
                experience in the dining halls. As of right now, the way
                students would have to find dining options is purely based on
                the information given on UTM’s dining website, which makes it a
                hassle for users to always login in or find the keywords in
                identifying the dining options. Similarly, UTM did implement
                this idea back when COVID-19 restrictions were still in effect
                but it was primarily just for students living in residence and
                it was hard for visitors to access these features. Therefore we
                hope that implementing this proposal will create a new
                innovation in how dining halls function. Additionally, this app
                is not restricted to students but it is available to faculty
                members and visitors.
              </p>
            </div>
          </div>
          <div class="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
            <h2 class="font-semibold text-lg sm:text-xl mb-6">Observations</h2>
            <div class="space-y-6 sm:text-lg text-neutral-600">
              <p>
                Our group aims to get a better understanding of the UTM
                students' struggles when it comes to food on campus. Such
                struggles could include the variety of food, the prices of the
                currently available food options, the time constraint that is
                put on students when entering a line to get food, and or the
                preference for one building's dining hall as opposed to another.
                Through our research, we strive to develop a well-thought-out
                and strategic approach to resolve and reduce the struggles that
                students are facing when it comes to food on campus. This goal
                will be achieved through miniature objectives: gathering data,
                analyzing/processing data, then devising a course of action to
                solve the problem that is discovered.
              </p>
              <p>
                The first objective will be achieved through our methods of data
                collection, those being interview/focus groups and formal online
                surveys, both of which are explained in greater detail under the
                Methods heading. The second objective will be done as a
                collective group, processing our data and determining if there
                are any biases or intrusions on our data than grouping and
                extracting the valuable information. Our last objective will
                result from the completion of the two prior as once we have
                gathered and analyzed our data we will determine what is the
                most efficient and effective course of action that will better
                the current issues that UTM students are facing when it comes to
                food on campus.
              </p>
            </div>
          </div>
          <div class="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
            <h2 class="font-semibold text-lg sm:text-xl mb-6">Methods</h2>
            <div class="space-y-6 sm:text-lg text-neutral-600">
              <p>
                There are two primary methods that are used in our research
                project: interviews/focus groups and formal online surveys,
                which were both quantitative and qualitative. The
                interviews/focus groups are one on one, and the participants
                selected are determined based on a few attributes, which will be
                discussed in the Participants & Recruitment section of this
                paper. Within the interview, there are selected questions that
                are designed to get a better understanding of the current
                food-related issues that they are facing. Some of the questions
                that are asked are the following: How often do you buy food from
                campus? What is the most common food chain you buy from and why?
                What discourages you from going to the other dining halls and
                food chains?
              </p>
              <p>
                The second research method that was chosen was to use a formal
                online survey which was a mixture of quantitative and
                qualitative. The reason for the mixture was we included
                questions like “rate this on a scale of 1-5” and we created
                survey questions like “how do you feel about x”. We then decided
                that the choice of online, as opposed to in-person surveys, was
                for a few reasons the primary ones being: accessibility and
                convenience. In terms of accessibility, if we had opted to use
                an in-person survey the participants would have to be fixed to a
                certain place and time. Online surveys offered us the potential
                to reach a much larger audience. Convenience was a large
                contributing factor to the use of online surveys as it allowed
                us to market the convenience factor, “participate in our
                2-minute survey whenever you are free”.{" "}
              </p>
            </div>
          </div>
          <div class="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
            <h2 class="font-semibold text-lg sm:text-xl mb-6">Ideation</h2>
            <div class="space-y-6 sm:text-lg text-neutral-600">
              <p>
                Our team recognized the importance of designing a system that is
                easy to use, and we decided early on to create a webpage or
                mobile application as we discovered that most students at the
                University of Toronto - Mississauga campus own a mobile phone
                and use it frequently. Our surveys confirmed this information,
                and we also recognized that mobile apps are a widely used method
                of disseminating information. Our research showed that students
                often struggle with deciding where to eat on campus. To address
                this issue, we knew we needed to create a tool that could help
                students quickly find nearby dining options. Unfortunately, the
                current system does not efficiently provide this information. As
                a result, students often have to spend a considerable amount of
                time searching for dining options on campus. Additionally, the
                lack of information about wait times in dining service lines
                further compounds the problem of accessing food on campus.
              </p>
              <p>
                Our method for gathering information involved selecting a
                specific service randomly and timing the entire process from the
                moment we mentioned its name until we received our order. We
                repeated this process several times at different locations on
                campus and analyzed the results. Based on our findings, we
                determined that a mobile application that uses proximity to
                suggest dining options for students and provides real-time line
                updates would be highly beneficial. Such an application would
                enable students to locate food options efficiently, thus
                satisfying their hunger and keeping them motivated throughout
                their day of classes.
              </p>
            </div>
          </div>
          <div class="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
            <h2 class="font-semibold text-lg sm:text-xl mb-6">
              Design Proposal
            </h2>
            <div class="space-y-6 sm:text-lg text-neutral-600">
              <p>
                We developed a digital interface for resolving issues at UTM's
                dining hall by creating a mobile app. To determine whether a
                mobile app or website (or both) would be a better solution, we
                first examined the user's requirements. We asked questions such
                as "What is the primary problem faced by students, and what
                solutions would they prioritize?" Our group conducted extensive
                research, observations, and deliberations, and we observed that
                most students use their phones frequently and find laptops
                difficult to use while walking or for quick access. Therefore,
                we decided to implement a mobile app. Our objective was to
                create an app that enables users to both "order ahead and view
                queue times."
              </p>
              <div
                className="flex
              justify-center"
              >
                <Image
                  src={IA}
                  alt="University of Toronto Davis Food Court"
                  width={600}
                  height={500}
                />
              </div>
              <p>
                After deciding to develop a mobile app for UTM's dining hall
                complications, we plan to create a prototype to showcase the
                app's features and gather feedback from users and stakeholders.
                A prototype offers a more tangible representation of the app's
                functionality compared to wireframes, allowing users to
                experience it in real-life scenarios. Through testing, we can
                improve the app's usability and effectiveness before final
                development. Our aim is to create a user-friendly and effective
                app that meets the needs of UTM's dining hall users.
              </p>
              <div
                className="flex
              justify-center"
              >
                <Image
                  src={prototype1}
                  alt="University of Toronto Davis Food Court"
                  width={600}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div class="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
            <h2 class="font-semibold text-lg sm:text-xl mb-6">Next Steps</h2>
            <div class="space-y-6 sm:text-lg text-neutral-600">
              <p>
                <span class="font-bold">
                  This was not an official study commissioned by the University
                  of Toronto, nor is it affiliated with the university. It was
                  conducted during a user experience design course and, although
                  it was not intended to reach production, our team learned
                  several valuable lessons from the process.
                </span>
              </p>

              <p>
                Moving forward as a group, we plan to present our design
                proposal to UTM dining services and conduct more in-depth
                research on the dining halls. Our secondary research revealed
                that dining hall issues are persistent across North American
                universities. To gather more opinions from students, we will
                also conduct primary research. Our main goal is to launch an app
                or propose our idea to UTM to provide students with a seamless
                experience when ordering food and exploring on-campus options.
                We aim to gather feedback on our app design and implement
                user-friendly ideas based on the feedback we receive. Our
                proposed solutions may not solve all issues, but they can
                address many student concerns. Currently, UTM has only
                implemented self-checkout in Davis based on observations and
                secondary research. We believe that our mobile app design could
                further enhance the user experience for students, visitors,
                faculty members, and stakeholders alike.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dininghall;
