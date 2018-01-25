import React, { Component } from 'react';
import Container from '../ui/Container';
import Sidebar from './Sidebar';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class Resume extends Component {
  render() {
    return (
      <Container>
        <Header {...DATA.main} />
        <div style={{ display: 'flex' }}>
          <Main {...DATA.main} />
          <Sidebar data={DATA.sidebar} />
        </div>
        <Footer links={DATA.footerLinks} />
      </Container>
    );
  }
}

const DATA = {
  sidebar: {
    education: {
      university: 'UNIVERSITY NAME',
      duration: 'MONTH YEAR - MONTH YEAR',
      degree: 'Academic Degree',
    },
    languages: [
      {
        name: 'LANGUAGE_1',
        proficiency: 0.20,
      },
      {
        name: 'LANGUAGE_2',
        proficiency: 0.20,
      },
      {
        name: 'LANGUAGE_3',
        proficiency: 0.20,
      },
      {
        name: 'LANGUAGE_4',
        proficiency: 0.20,
      },
      {
        name: 'LANGUAGE_5',
        proficiency: 0.20,
      },
    ],
    databases: ['DATABASE_1', 'DATABASE_2', 'DATABASE_3'],
    libraries: [
      'FRAMEWORK_1',
      'FRAMEWORK_2',
      'FRAMEWORK_3',
      'FRAMEWORK_4',
      'FRAMEWORK_5',
      'FRAMEWORK_6',
      'FRAMEWORK_7',
      'FRAMEWORK_8',
      'FRAMEWORK_9',
      'FRAMEWORK_10',
      'FRAMEWORK_11',
      'FRAMEWORK_12',
      'FRAMEWORK_13',
      'FRAMEWORK_14',
      'FRAMEWORK_15',
      'FRAMEWORK_16',
    ],
    tools: [
      'TOOL_1',
      'TOOL_2',
      'TOOL_3',
      'TOOL_4',
      'TOOL_5',
      'TOOL_6',
      'TOOL_7',
      'TOOL_8',
      'TOOL_9',
      'TOOL_10',
      'TOOL_11',
    ],
    interests: [
      'I <b>learn</b> about TOPIC_1 and TOPIC_2.',
      'I <b>dominate</b> in SPORT_1, SPORT_2, SPORT_3, and SPORT_4.',
      'I <b>love</b> HOBBIE_1, HOBBIE_2, HOBBIE_3, HOBBIE_4, HOBBIE_5, and HOBBIE_6.',
      'I <b>hate</b> doing HATE_1, HATE_2 and HATE_3.',
    ],
    links: [
      {
        name: 'Email',
        faClass: 'fa fa-envelope',
        display: 'general@oppr.io',
        link: 'mailto:general@oppr.io',
      },
      {
        name: 'GitHub',
        faClass: 'fa fa-github',
        display: 'github.com/opprDev',
        link: 'https://github.com/opprDev',
      },
      {
        name: 'Twitter',
        faClass: 'fa fa-twitter',
        display: 'twitter.com/opprGroup',
        link: 'https://twitter.com/opprGroup',
      },
    ],
  },
  footerLinks: [
    {
      name: 'Website',
      faClass: 'fa fa-fire',
      display: 'dev.oppr.io',
      link: 'http://dev.oppr.io/',
    },
    {
      name: 'Medium',
      faClass: 'fa fa-book',
      display: 'medium.com/@oppr',
      link: 'https://medium.com/@oppr',
    },
    {
      name: 'Linkedin',
      faClass: 'fa fa-linkedin',
      display: 'linkedin.com/company/oppr',
      link: 'https://www.linkedin.com/company/10665308',
    },
  ],
  main: {
    firstName: 'opprDev',
    lastName: 'Team',
    program: {
      term: '',
      nickname: 'Technology',
      name: 'Technology',
    },
    website: {
      name: 'dev.oppr.io',
      link: 'dev.oppr.io',
    },
    companies: [
      {
        name: 'COMPANY_1',
        title: 'TITLE_1',
        color: 'rgb(77, 100, 141)',
        date: 'MONTH YEAR',
        location: 'LOCATION_1',
        achievements: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <b><a href="#">LINK</a></b>  labore et dolore magna aliqua.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <b><a href="#">LINK</a></b>  labore et dolore magna aliqua.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <b><a href="#">LINK</a></b>  labore et dolore magna aliqua.',
        ],
      },
      {
        name: 'COMPANY_2',
        title: 'TITLE_2',
        color: 'rgb(77, 100, 141)',
        date: 'MONTH YEAR',
        location: 'LOCATION_2',
        achievements: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <b><a href="#">LINK</a></b>  labore et dolore magna aliqua.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <b><a href="#">LINK</a></b>  labore et dolore magna aliqua.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <b><a href="#">LINK</a></b>  labore et dolore magna aliqua.',
        ],
      },
      {
        name: 'COMPANY_3',
        title: 'TITLE_3',
        color: 'rgb(77, 100, 141)',
        date: 'MONTH YEAR',
        location: 'LOCATION_3',
        achievements: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <b><a href="#">LINK</a></b>  labore et dolore magna aliqua.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <b><a href="#">LINK</a></b>  labore et dolore magna aliqua.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <b><a href="#">LINK</a></b>  labore et dolore magna aliqua.',
        ],
      },
      {
        name: 'COMPANY_4',
        title: 'TITLE_4',
        color: 'rgb(77, 100, 141)',
        date: 'MONTH YEAR',
        location: 'LOCATION_4',
        achievements: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <b><a href="#">LINK</a></b>  labore et dolore magna aliqua.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <b><a href="#">LINK</a></b>  labore et dolore magna aliqua.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <b><a href="#">LINK</a></b>  labore et dolore magna aliqua.',
        ],
      },
    ],
    projects: [
      {
        name: 'PROJECT_1',
        tools: [],
        achievements: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <b><a href="#">LINK</a></b> labore et dolore magna aliqua',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <b><a href="#">LINK</a></b> labore et dolore magna aliqua',
        ],
      },
      {
        name: 'PROJECT_2',
        tools: [],
        achievements: [
          '<b><a href="#">LINK</a></b> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          '<b><a href="#">LINK</a></b> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          '<b><a href="#">LINK</a></b> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          '<b><a href="#">LINK</a></b> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        ],
      },
    ],
  },
};

export default Resume;
