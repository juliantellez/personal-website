// tslint:disable:max-line-length

import * as React from 'react';
import IBlogPost from '../../../shared/Interfaces/IBlogPost';
import { getResume } from '../../Api/github/getResume';

import BlogPost from '../../Components/BlogPost';
import Body from '../../Components/Body/Body';
import Footer from '../../Components/Footer/Footer';
import PrintPage from '../../Components/PrintPage';

// const resumeProps = {
//     title: 'Julian Tellez',
//     subTitle: 'Software Engineer',
//     description: '<p>Software Engineer. I create performant and fully-featured solutions using best practice standards. I am passionate about high concurrency and scalability problems. I love a good design session and to build and contribute to high performant teams.</p>\n',
//     tags: ['Resume', 'Cv', 'Contact'],
//     published: true,
//     language: 'en',
//     body: '<h2><a href="https://uw.co.uk/">Utility Warehouse</a></h2>\n' +
//         '<ul>\n' +
//         '<li>Role: Senior Software Engineer</li>\n' +
//         '<li>Date: Dec 2019 — present (2 yrs 10 mos +)</li>\n' +
//         '</ul>\n' +
//         '<p>Utility Warehouse is a multi service provider on a mission to bundle all home\n' +
//         'services into one simple bill. I have been involved in multiple user facing\n' +
//         'projects, some of which include real time email, chat, call, reminder and payment services,\n' +
//         'as well as contributing to its ongoing digital transformation.</p>\n' +
//         '<table>\n' +
//         '<thead>\n' +
//         '<tr>\n' +
//         '<th>Frontend</th>\n' +
//         '<th>Backend/Devops</th>\n' +
//         '</tr>\n' +
//         '</thead>\n' +
//         '<tbody>\n' +
//         '<tr>\n' +
//         '<td>React + Hooks</td>\n' +
//         '<td>Cloud Native (Kubernetes - Docker - kafka)</td>\n' +
//         '</tr>\n' +
//         '<tr>\n' +
//         '<td>GraphQl</td>\n' +
//         '<td>Terraform</td>\n' +
//         '</tr>\n' +
//         '<tr>\n' +
//         '<td>Typescript</td>\n' +
//         '<td>Observability (Prometheus - Grafana)</td>\n' +
//         '</tr>\n' +
//         '<tr>\n' +
//         '<td>Vanilla JS (es5-13)</td>\n' +
//         '<td>Nodejs (Express)</td>\n' +
//         '</tr>\n' +
//         '<tr>\n' +
//         '<td>Webpack</td>\n' +
//         '<td>Go (Protobuf + gRPC)</td>\n' +
//         '</tr>\n' +
//         '<tr>\n' +
//         '<td>Sass</td>\n' +
//         '<td>CircleCI / Github Actions / Drone</td>\n' +
//         '</tr>\n' +
//         '<tr>\n' +
//         '<td>Cypress</td>\n' +
//         '<td>AWS / GCP</td>\n' +
//         '</tr>\n' +
//         '</tbody>\n' +
//         '</table>\n' +
//         '<h2><a href="https://www.dazn.com">DAZN</a></h2>\n' +
//         '<ul>\n' +
//         '<li>Role: Software Engineer</li>\n' +
//         '<li>Date: Sep 2017 — Dec 2019 (2 yrs 4 mos)</li>\n' +
//         '</ul>\n' +
//         '<p>Dazn is a live and on demand sports streaming service.\n' +
//         'Available on multiple countries and devices at home or on the go. I have had the pleasure of contributing to their playback engine, pushing the boundaries of html5 capable devices such as Xbox, SkyQ, FireStick, various smart Tvs and the Web.</p>\n' +
//         '<table>\n' +
//         '<thead>\n' +
//         '<tr>\n' +
//         '<th>Frontend</th>\n' +
//         '<th>Backend/Devops</th>\n' +
//         '</tr>\n' +
//         '</thead>\n' +
//         '<tbody>\n' +
//         '<tr>\n' +
//         '<td>React</td>\n' +
//         '<td>Serverless (framework)</td>\n' +
//         '</tr>\n' +
//         '<tr>\n' +
//         '<td>Rxjs</td>\n' +
//         '<td>Docker</td>\n' +
//         '</tr>\n' +
//         '<tr>\n' +
//         '<td>Mobx</td>\n' +
//         '<td>Terraform</td>\n' +
//         '</tr>\n' +
//         '<tr>\n' +
//         '<td>Typescript</td>\n' +
//         '<td>Nodejs (Express)</td>\n' +
//         '</tr>\n' +
//         '<tr>\n' +
//         '<td>Vanilla JS (es5-9)</td>\n' +
//         '<td>Go</td>\n' +
//         '</tr>\n' +
//         '<tr>\n' +
//         '<td>Webpack</td>\n' +
//         '<td>Drone / Jenkins</td>\n' +
//         '</tr>\n' +
//         '<tr>\n' +
//         '<td>Postcss - Sass</td>\n' +
//         '<td>AWS</td>\n' +
//         '</tr>\n' +
//         '</tbody>\n' +
//         '</table>\n' +
//         '<h3>Specialised</h3>\n' +
//         '<ul>\n' +
//         '<li>Video players (Shaka, hasplayer, dashplayer, exoPlayer)</li>\n' +
//         '<li>Playback architecture (Streaming protocols, CDNs, Metrics, Heuristics)</li>\n' +
//         '</ul>\n' +
//         '<h2><a href="https://plentific.com">PLENTIFIC</a></h2>\n' +
//         '<ul>\n' +
//         '<li>Role: Software Engineer</li>\n' +
//         '<li>Date: Oct 2015 — Sep 2017 (2 yrs)</li>\n' +
//         '</ul>\n' +
//         "<p>Plentific is on a mission to improve people's lives by simplifying property management.\n" +
//         'I have had the opportunity of working in various projects at\n' +
//         'Plentific, some of which include: Isomorphic landing pages, a\n' +
//         'React.js based Email service, a B2B dashboard, and a Payments\n' +
//         'service.</p>\n' +
//         '<table>\n' +
//         '<thead>\n' +
//         '<tr>\n' +
//         '<th>Frontend</th>\n' +
//         '<th>Backend/Devops</th>\n' +
//         '</tr>\n' +
//         '</thead>\n' +
//         '<tbody>\n' +
//         '<tr>\n' +
//         '<td>React</td>\n' +
//         '<td>Docker</td>\n' +
//         '</tr>\n' +
//         '<tr>\n' +
//         '<td>Flux, Redux</td>\n' +
//         '<td>Kubernetes (helm, deis)</td>\n' +
//         '</tr>\n' +
//         '<tr>\n' +
//         '<td>Babel, Webpack and Gulp</td>\n' +
//         '<td>Nodejs (Hapijs/ Express)</td>\n' +
//         '</tr>\n' +
//         '<tr>\n' +
//         '<td>Vanilla js (es5-6)</td>\n' +
//         '<td>Jenkins</td>\n' +
//         '</tr>\n' +
//         '<tr>\n' +
//         '<td>Sass (BEM)</td>\n' +
//         '<td>Aws</td>\n' +
//         '</tr>\n' +
//         '<tr>\n' +
//         '<td>Single Page Apps / Server side rendering</td>\n' +
//         '<td></td>\n' +
//         '</tr>\n' +
//         '</tbody>\n' +
//         '</table>\n' +
//         '<h3>Testing</h3>\n' +
//         '<ul>\n' +
//         '<li>BDD cucumber + Webdriver.io</li>\n' +
//         '<li>Visual regression</li>\n' +
//         '</ul>\n' +
//         '<h1>Education</h1>\n' +
//         '<h2>Middlesex University, London U.K.</h2>\n' +
//         '<ul>\n' +
//         '<li>Title: Bachelor of Science (B.Sc.)</li>\n' +
//         '<li>Date: 2010 - 2013</li>\n' +
//         '</ul>\n' +
//         '<p>Procedural Programming (applied to sound), MatLab, DSP</p>\n' +
//         '<h2>SAE Institute, London U.K.</h2>\n' +
//         '<ul>\n' +
//         '<li>Title: Audio Engineering Diploma</li>\n' +
//         '<li>Date: 2010 - 2012</li>\n' +
//         '</ul>\n' +
//         '<p>Audio Production, Creative work</p>\n' +
//         '<h1>Languages</h1>\n' +
//         '<ul>\n' +
//         '<li>English</li>\n' +
//         '<li>Spanish</li>\n' +
//         '</ul>\n',
//     readingTime: '3 minutes',
//     slug: 'mock-slug',
//     uuid: '2c908616-b092-4a16-a2f1-a51837b4d86b',
//     updated: 'Sep 25, 2019',
//     created: 'Sep 25, 2019'
// };

const ResumePage = () => {
    const [resume, setResume] = React.useState<IBlogPost>()
    React.useEffect(() => {
        getResume().then(r => {
            setResume(r)
        })
    }, [])

    return (
        <Body>
            <BlogPost {...resume} />
            <PrintPage />
            <Footer />
        </Body>
    );
};

export default ResumePage;
