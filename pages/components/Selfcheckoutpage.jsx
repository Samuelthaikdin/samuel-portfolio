import React from "react";
import Link from "next/link";
import Image from "next/image";
import davisphoto from "../images/davis_foodcourt.jpg";
import selfcheckout from "../images/selfcheckoutprototype.png";

function Selfcheckoutpage() {
  return (
    <div>
      <main class="">
        <div className="max-w-full px-10 md:px-20 xl:px-32 py-20">
          <div className="max-w-5xl mx-auto">
            <h1 className="mb-6 text-3xl xl:text-5xl font-extrabold xl:leading-tight text-white">
              Implementing self-checkouts at the University of Toronto's dining
              halls
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
            <p className="text-sm text-neutral-300">
              The Davis food court at the Univeristy of Toronto Mississauga
            </p>
            <p className="text-sm text-neutral-300 md:text-right">
              Photo by{" "}
              <a
                className="font-medium"
                href="https://archive.themedium.ca/news/new-renovations-davis-approved/"
                target={"_blank"}
              >
                Yasmeen Alkoka
              </a>
            </p>
          </div>
          <div className="flex items-center justify-center mb-10 relative">
            <Image
              src={davisphoto}
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
                <p>UX designer</p>
                <p>UX researcher</p>
              </div>
              <div>
                <p className="font-medium text-white mb-2">Scope</p>
                <p>Field studies</p>
                <p>Affinity diagraming</p>
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
                  <p>Sebastian Rodriguez</p>
                  <p>Scott Warren</p>
                  <p>Hai Nguyen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Content*/}
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
                While each dining hall has three checkout stations where
                students can purchase food, only one or two kiosks are open at
                any time. In addition, while some locations have designated
                payment queues, the lines are often unstructured and can
                obstruct access to other parts of the cafeteria. This
                combination of unmanned kiosks and obfuscated queues discourages
                students from eating and can negatively impact their health.
              </p>
            </div>
          </div>
          <div class="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
            <h2 class="font-semibold text-lg sm:text-xl mb-6">Observations</h2>
            <div class="space-y-6 sm:text-lg text-neutral-600">
              <p>
                To gather data on the student experience in the dining halls,
                our team conducted site visits and observed the typical
                interactions. We timed how long it took students to complete the
                entire process, from queuing to ordering and paying. Our
                observations revealed a bottleneck during the post-ordering
                phase, where students would form makeshift lines behind open
                checkout kiosks, resulting in confusion and disarray in all
                dining halls.
              </p>
              <p>
                Furthermore, certain dining halls such as Coleman Commons had
                their checkout kiosks situated in the same area as the entrance.
                This meant that students entering the dining hall would have to
                navigate through the crowd of students queuing to pay. The
                situation was compounded by the inadequate number of staffed
                checkout stations, with a maximum of only two kiosks being
                manned during our observation. On rare occasions, none of the
                kiosks were operational, resulting in students having to wait
                for a staff member to return before being able to eat.
              </p>
              <table class="min-w-full divide-y divide-neutral-400">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-neutral-900 sm:pl-6 md:pl-0"
                    >
                      Dining Hall
                    </th>
                    <th
                      scope="col"
                      class="py-3.5 px-3 text-left text-sm font-semibold text-neutral-900"
                    >
                      Wait Time
                      <hr />
                      <span class="text-xs font-medium text-neutral-600">
                        Food Ordering
                      </span>
                    </th>
                    <th
                      scope="col"
                      class="py-3.5 px-3 text-left text-sm font-semibold text-neutral-900"
                    >
                      Wait Time
                      <hr />
                      <span class="text-xs font-medium text-neutral-600">
                        Food Prep
                      </span>
                    </th>
                    <th
                      scope="col"
                      class="py-3.5 px-3 text-left text-sm font-semibold text-neutral-900"
                    >
                      Wait Time
                      <hr />
                      <span class="text-xs font-medium text-neutral-600">
                        Checkout
                      </span>
                    </th>
                    <th
                      scope="col"
                      class="py-3.5 px-3 text-left text-sm font-semibold text-neutral-900"
                    >
                      Total Time
                      <hr />
                      <span class="text-xs font-medium text-neutral-600">
                        From enter to exit
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-neutral-400">
                  <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-neutral-900 sm:pl-6 md:pl-0">
                      Davis (Peak)
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      20 mins
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      11 mins
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      10 mins
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      40 mins
                    </td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-neutral-900 sm:pl-6 md:pl-0">
                      Davis (Off-Peak)
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      5 mins
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      10 mins
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      2 mins
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      17 mins
                    </td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-neutral-900 sm:pl-6 md:pl-0">
                      IB (Peak)
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      20 mins
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      12 mins
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      11 mins
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      43 mins
                    </td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-neutral-900 sm:pl-6 md:pl-0">
                      IB (Off-Peak)
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      10 mins
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      8 mins
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      3 mins
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      21 mins
                    </td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-neutral-900 sm:pl-6 md:pl-0">
                      OPH (Peak)
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      15 mins
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      10 mins
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      17 mins
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      45 mins
                    </td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-neutral-900 sm:pl-6 md:pl-0">
                      OPH (Off-Peak)
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      6 mins
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      7 mins
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      5 mins
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral-600">
                      19 mins
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                In order to recognize wait times as a significant issue in this
                process, we took into account the University's prior efforts to
                address this problem. Initially, the University implemented a
                "grab and go" system, where students could order food prior to
                reaching the dining hall. Although this method helped to reduce
                the overall wait time, students were still required to wait in
                the same checkout line as non-"grab and go" customers.{" "}
              </p>
            </div>
          </div>
          <div class="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
            <h2 class="font-semibold text-lg sm:text-xl mb-6">
              Proposed Solution
            </h2>
            <div class="space-y-6 sm:text-lg text-neutral-600">
              <p>
                Based on our observations, it became apparent that students
                needed additional payment options for their meals. This issue
                was a result of an institutional failure, as the university did
                not have enough staff to manage the dining halls effectively. To
                tackle this problem, we aimed to develop a self-checkout system
                that did not require additional staffing.
              </p>
              <p>
                Self-checkouts have been widely adopted by major commercial
                stores across the country as a proven solution to this issue.
                Although staff members may still be necessary to resolve any
                problems that may arise during the self-checkout process, these
                machines could provide an easier way for students to pay and
                create additional points of sale to handle congestion.{" "}
              </p>
            </div>
          </div>
          <div class="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
            <h2 class="font-semibold text-lg sm:text-xl mb-6">Prototyping</h2>
            <div class="space-y-6 sm:text-lg text-neutral-600">
              <p>
                Our team developed a hardware prototype of the self-checkout
                environment with an accompanying digital interface. The
                prototype included all the standard functions self-checkouts
                require: an item scanner, a payment gateway, and an interfacing
                guiding users through the system.
              </p>
              <p>
                The prototype saw two major iterations: a makeshift cardboard
                box with a laptop situated atop and an all-cardboard design
                replicating a traditional self-checkout kiosk. The initial
                design allowed us to test and experiment with the digital
                interface, while the second design sought to provide a holistic
                view of the system.
              </p>
              <p>
                Prototyping the digital design began with sketching, moved to
                low-fidelity wireframes, and ended with mockup prototypes.
              </p>
              <div className="flex items-center justify-center mb-10 relative">
                <Image
                  src={selfcheckout}
                  alt="University of Toronto Davis Food Court"
                  className="inline-block align-top relative "
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
          <div class="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
            <h2 class="font-semibold text-lg sm:text-xl mb-6">
              Usability Testing
            </h2>
            <div class="space-y-6 sm:text-lg text-neutral-600">
              <p>
                Our testing involved seven undergraduate students who regularly
                utilize on-campus dining halls. We conducted four distinct
                scenarios to evaluate the various pain points that we had
                observed, such as T-card payment methods, as well as potential
                pain points that other self-checkout systems encountered, such
                as the process of removing an item from the cart.
              </p>
              <p>
                The testing exposed problems with how the interface conveyed
                payment error messages. Initially, when students did not have
                sufficient funds on their T-card, the interface displayed a
                generic "payment rejected" message. Subsequently, we made
                revisions that displayed a range of error messages, including
                informing students of inadequate funds and displaying their
                current meal plan balance.
              </p>
            </div>
          </div>
          <div class="max-w-5xl mx-auto rounded-2xl bg-neutral-100 p-10">
            <h2 class="font-semibold text-lg sm:text-xl mb-6">Outcome</h2>
            <div class="space-y-6 sm:text-lg text-neutral-600">
              <p className="font-semibold">
                This was not an official study commissioned by the University of
                Toronto, nor is it affiliated with the university. It was
                conducted during a user experience design course and, although
                it was not intended to reach production, our team learned
                several valuable lessons from the process:
              </p>
              <ul class="list-disc ml-4 max-w-4xl space-y-4">
                <li>
                  <span class="font-medium bg-yellow-100 text-black">
                    An institutional failure doesn't mean there's no solution.
                  </span>{" "}
                  When there's an issue at an institutional level, don't give
                  up! Ideation can provide new solutions and alleviate pressure
                  on the institution.{" "}
                </li>
                <li>
                  <span class="font-medium bg-yellow-100 text-black">
                    Link design requirements to specific pain points.
                  </span>{" "}
                  It's easy to jump into a design and make claims about the
                  user's needs. Associating those needs with specific pain
                  points ensures you've addressed all of the user's problems.
                </li>
                <li>
                  <span class="font-medium bg-yellow-100 text-black">
                    When prototyping, you should simulate the whole environment,
                    not just the digital screen.
                  </span>{" "}
                  A screen alone cannot simulate a user experience when physical
                  actions are required.
                </li>
                <li>
                  <span class="font-medium bg-yellow-100 text-black">
                    Observe without interfering.
                  </span>{" "}
                  Sometimes you must be like David Attenborough and observe
                  users in their natural habitat. When users don't know they're
                  being observed, you might find more accurate data!
                </li>
              </ul>
              <p>
                <span class="font-bold">Addendum:</span> It's worth mentioning
                that the university installed self-checkouts in its dining halls
                a year after our study. Did we have anything to do with it?
                Maybe. Probably not. Do we feel vindicated? Absolutely.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Selfcheckoutpage;
