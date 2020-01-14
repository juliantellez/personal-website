// tslint:disable:max-line-length

import * as React from 'react';

import Article from '../../../../Components/Article';
import RoutePath from '../../../../Routes/Constants/RoutePath';

import * as styles from './Content.scss';

const Content = () => {
    return (
        <div className={styles.content}>
            <Article
                title="Conway's Game of Life"
                metadata="June 15 2019"
                description="The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.
                The game is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves, or, for advanced players, by creating patterns with particular properties."
                imageUrl="https://user-images.githubusercontent.com/4896851/63986049-1f5e7780-caca-11e9-9a80-388b8238116e.gif"
                to={RoutePath.GAME_OF_LIFE}
            />
            <Article
                title="Otto and the Muttapa"
                metadata="Apr 14 2019"
                description="Global Beats Club is back at Juju's Bar & Stage showcasing the best beats with a global twist, ranging from Tropical Bass to Afro Disco via Cumbia, Reggae, Dancehall & loads more!
                In addition to our resident DJs Count Bassy & Fizzy Gillespie we will be welcoming rare groove selectors Village Cuts and hosting a full live performance by the incredible Southern African Marimba band Otto & The Mutapa Calling. Good vibes and great tunes guaranteed until 4am!"
                link="https://www.eventbrite.co.uk/e/global-beats-club-otto-the-mutapa-calling-tickets-57729527571#"
                imageUrl="/assets/images/otto_and_the_muttapa.jpg"
            />
            <Article
                title="Handling complexity in lambda functions"
                metadata="Feb 8 2019· 5 min read"
                description="Middlewares can handle the complexity of your lambdas while isolating business logic and cross-cutting concerns in reusable components that can be modelled by event cycles.
                I have had the luck and pleasure of working with lambda functions recently and boy I am having fun! The idea of having an event-driven execution environment is both daring and exciting. If you are new to the FaaS world, don’t worry, the community has already prepared a curated list of reads for you here and here. Have a browse, drink some coffee. ☕
                As you can see, (because you checked at least one of the links, didn’t you?) A huge weight has been lifted. We can now develop, run and manage applications without the intricacy of building and maintaining infrastructure. But with new beginnings, new challenges arise. One of such problems and the reason for this blog is function complexity."
                to={RoutePath.BLOG_POST_LAMBDAS}
                imageUrl="https://miro.medium.com/max/8512/0*kbFW_oMK_p_EP4jH"
            />
            <Article
                title="La Vida Pasa"
                metadata="2 years ago"
                description={`
                Album - Aksel Unplugged
                Performed By - Aksel
                Recorded and Mixed By: Julian Tellez.
                `}
                link="https://soundcloud.com/juliantellez/la-vida-pasa"
                imageUrl="https://i1.sndcdn.com/artworks-000238840112-88q8eq-t500x500.jpg"
            />
            <Article
                title="Generative Footsteps: Sounds for film post production"
                metadata="June 2013"
                description="Adds to the research in post-production practices by using generative audio to digitally re-construct Foley stages. The rationale for combining generative audio with Foley processes is to analyse the possible implementation of new technology that could benefit from Foley practices in low-budget films.This research project also intersects sound synthesis, signal analysis and user interaction,where a behavioural analysis based on ground reaction forces was prototyped."
                imageUrl="/assets/images/recording_studio.jpg"
                link="https://www.academia.edu/3765552/Generative_Footsteps_Sounds_for_Film_Postproduction"
            />
        </div>
    );
};

export default Content;
