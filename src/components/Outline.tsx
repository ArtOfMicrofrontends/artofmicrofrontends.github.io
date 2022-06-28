import * as React from 'react';
import styled from 'styled-components';

const Intro = styled.p`
  font-size: 2rem;
  text-align: center;
`;

const Section = styled.section`
  margin: 2rem 0;
  grid-area: outline;
`;

const Article = styled.article`
  max-width: 80ch;
  margin: auto;
`;

function Outline() {
  return (
    <Section>
      <h2>Sections and Outline</h2>
      <Intro>Everything you need to know about Micro Frontends.</Intro>
      <Article>
        <h3>The Hive - Introducing Frontend Modularization</h3>
        <p>
          Excelled knowledge of micro frontends in general, their primary areas of use and challenges and problems they
          bring incl. what strategies can be used to mitigate these.
        </p>
        <ol>
          <li>
            <h4>Why Micro Frontends?</h4>
            <p>
              Even though the history of the web is a relatively young one, a lot has already happened. Here, the reader
              is motivated to learn more about micro frontends, its origins, why companies are investing so much in
              modularization and what benefits appear consequently. This chapter sets the tone for the introduction and
              thus for the whole book. The crucial learning is to show that micro frontends are the natural next step
              for a truly decoupled, decentralized, and distributed web. The role of modern standards such as web
              components is discussed, as well as the analogy to microservices.
            </p>
          </li>
          <li>
            <h4>Common Challenges and Pitfalls</h4>
            <p>
              Today, micro frontends are among the most difficult pieces of technology. The challenges are many and
              cannot be easily solved without lots of experience, strong tooling, and guidance. To avoid the pitfalls
              and to be able to successfully tackle all challenges with sound solutions this chapter tries to list some
              of the most difficult ones, together with a path leading to a proper solution.
            </p>
          </li>
          <li>
            <h4>Deployment Scenarios</h4>
            <p>
              Quite often the main reason for introducing micro frontends is the scalability in terms of dev teams.
              However, in order to scale teams indefinitely the deployments of the different micro frontends need to be
              autonomous and independent. Dependent on the chosen microfrontend architecture different ways of creating
              scalable CI/CD pipelines need to be applied. Using examples of services such as Travis CI, Circle CI, and
              Azure Pipelines we see what kind of pipelines can be utilized to serve the different scenarios most
              efficiently.
            </p>
          </li>
          <li>
            <h4>Domain Decomposition</h4>
            <p>
              The core problem when creating microfrontend solutions is essentially the same as with microservice
              solutions. What should all be in a microfrontend? Where are the boundaries drawn? Using some domain-driven
              design techniques this chapter shows how a domain decomposition concept can be derived, which is then used
              to decide what functionality should go into what microfrontend. Should a new feature be done in a new
              microfrontend or into an existing microfrontend?
            </p>
          </li>
        </ol>
        <h3>Dry Honey - Implementing Micro Frontend Architectures</h3>
        <p>
          In-depth knowledge on the available architecture patterns, how they can be implemented, their variations,
          areas of use, maintenance effort, advantages, disadvantages, and common challenges.
        </p>
        <ol start={5}>
          <li>
            <h4>Types of Micro Frontends</h4>
            <p>
              There are many different types of microfrontend architectures. Looking at microservices the situation
              feels much more fragmented for micro frontends. Nevertheless, we can construct a phase space with 3
              dimensions to classify all the possible architecture types from their high-level perspective. We start
              with the microfrontend landscape, which will not only reflect back on the history, but include some of the
              most popular solutions (open-source and proprietary) out there. Then we discuss the extremes of each
              dimension with their pros and cons, areas of use and possible implementation details. We invest in a
              pipeline for compile-time micro frontends, which is an effective learning tool to see how complexity can
              be shifted to any stage (development-time to compile-time to server-runtime to client-runtime).
            </p>
          </li>
          <li>
            <h4>The Web Approach</h4>
            <p>
              The simplest approach of handling micro frontends is to rely on individual frontends (or apps) to be
              rendered on different servers. Like an API gateway a central unit will dispatch requests from a central
              domain to the individual microfrontend services. This approach could be designed without any overlap in
              mind. Teams are going for whole pages, only governed by a centrally given design and business domain. A
              globally aggregated sitemap allows linking without much maintenance effort. Using iframe sources instead
              of top-level navigation screen fragments can be reused.
            </p>
          </li>
          <li>
            <h4>Server-Side Composition</h4>
            <p>
              If we can introduce complexity on the backend then server-side composition may be useful. This
              architecture style allows to dynamically stitch a view together from various sources. It allows horizontal
              micro frontends without requiring any shared repository at all. The chapter goes into all the details of
              what and when this pattern should be applied.
            </p>
          </li>
          <li>
            <h4>Edge-Side Composition</h4>
            <p>
              Even closer to the client is the edge-side, which could be used in a reverse proxy setup (e.g., using
              Nginx or Varnish) to stitch different views together into a single layout. The basis for this pattern is
              formed by SSI and ESI, which have been introduced for server-side logic originally. Quite often, this
              pattern is not used alone, but rather jointly with either server-side or client-side composition. For the
              former, we'll discuss it in a BFF stitching example.
            </p>
          </li>
          <li>
            <h4>Client-Side Composition</h4>
            <p>
              The beauty of client-side composition lies in the simplicity and directness. There is a lot of modern web
              philosophy entering here without requiring any complicated backend infrastructure. The main ingredient is
              a framework agnostic transportation mechanism using web components. We can therefore introduce a specific
              microfrontend in any application anywhere. Likewise, web components come with their own problems, which
              need to be tackled and tamed.
            </p>
          </li>
          <li>
            <h4>SPA Composition</h4>
            <p>
              The SPA composition is quite attractive, too, as it combines the modern web approach using single-page
              applications with the microfrontend pattern. Here, we fall back to a single router, which can be used with
              any framework. The reader will build a very simple app shell that provides such a router allowing imported
              micro frontends to be loaded and used when needed. We will also learn how to communicate between the
              different micro frontends.
            </p>
          </li>
          <li>
            <h4>Siteless UIs</h4>
            <p>
              Similar to serverless functions siteless UIs provide a way of writing micro frontends without having to
              take care of the core infrastructure. Instead, an emulator provides great (offline) debugging experience
              out of the box, while automatic provisioning, caching rules, crucial architecture decisions and runtime
              optimizations, are all done at a base level. Here, an application shell can be developed that forms the
              runtime basis for a set of micro frontends that can be independently developed, deployed, and maintained
              to form a consistent and very well performing application.
            </p>
          </li>
        </ol>
        <h3>Busy Bees - Scaling Organizations</h3>
        <p>
          How to successfully manage micro frontends from the organization's point of view, incl. common pitfalls,
          communication strategies, impact on UX/UI, and lessons learned from others.
        </p>
        <ol start={12}>
          <li>
            <h4>Preparing Teams and Stakeholders</h4>
            <p>
              Very often adopting micro frontends is not so much about the technical challenges, but rather about the
              organizational shift. Similar to microservices, the organization needs to embrace the architecture and
              reflect it in its team structure (Conway's law). This starts with the communication to higher stakeholders
              and ends with the setup of the different teams. Ultimately, every organization adopting micro frontends
              will need to incorporate some changes or the project may deviate from the original plan in the best case
              or be a complete failure in the worst case.
            </p>
          </li>
          <li>
            <h4>Dependency Management, Governance and Security</h4>
            <p>
              Sharing dependencies is one of the crucial things for micro frontends. This topic alone requires a lot of
              discussion, as the two extremes (share no dependencies, share all dependencies) don't age well, either.
              Finding the perfect middle ground and being able to support that mode is crucial. An update strategy
              together with some governance is helping. Governance may also be more in the focus if contributing teams
              are more outside of the inner circle. In the extreme case users may submit their own micro frontends that
              run just besides our own modules. Securing this process from deployment to runtime is essential for a
              functioning system.
            </p>
          </li>
          <li>
            <h4>Impact on UX and Screen Design</h4>
            <p>
              While micro frontends are very often technically-driven they impact UX as much as they demand a sound
              implementation. One of the reasons is that a - quite often uncontrolled - growing application must be
              flexible in many areas, which have previously been more than well-defined. Here, we discuss what UX
              designers must know to accommodate for the anticipated flexibility appropriately.
            </p>
          </li>
          <li>
            <h4>Developer Experience</h4>
            <p>
              Micro frontends are among the most complicated techniques for creating user experiences. Quite often, the
              complexity is not really tamed and leaks towards the development team. Following the examples of this
              chapter the reader will learn to keep the technical basis clean and the developer experience in the best
              shape. This includes great editor integration, scaffolding and templating tools, linting and typing
              support, as well as straight forward error messages.
            </p>
          </li>
          <li>
            <h4>Case Studies</h4>
            <p>
              In the final chapter the lessons learned are backed up with real-world stories and experiences from three
              projects, which all demanded (frontend-driven) micro frontends, but with vastly different set ups, team
              sizes, distribution of developers, and client demands / expectations. Here, all our gathered knowledge is
              verified against these case studies.
            </p>
          </li>
        </ol>
      </Article>
    </Section>
  );
}

export default Outline;
