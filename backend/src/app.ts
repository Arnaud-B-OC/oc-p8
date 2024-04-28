import express = require('express');
import path = require('path');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

    console.log(`[${req.method}] ${req.url}`);

    next();
});

app.use(express.json());
// app.use(mongoSanitize());

app.use(express.static('build'));

// TODO : API

const PROJECTS = [
    {
        id: 'booki',
        title: 'Booki',
        preview: '/ress/images/projects/booki.jpg',
        
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo justo, facilisis in diam sed, blandit pharetra massa. Morbi tempor tortor non risus rhoncus efficitur. Morbi eget ipsum sit amet magna molestie elementum at pellentesque lectus. Suspendisse aliquam, dolor vehicula fringilla dictum, tellus mi posuere est, nec maximus tellus nisl.',
        githubLink: 'https://github.com/Arnaud-B-OC/oc-p2',
        websiteLink: 'https://p2.radiant-horizon.net',
        image: '/ress/images/projects/booki-hd.jpg',
    },
    {
        id: 'sophie-bluel',
        title: 'Sophie Bluel',
        preview: '/ress/images/projects/bluel.jpg',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo justo, facilisis in diam sed, blandit pharetra massa. Morbi tempor tortor non risus rhoncus efficitur. Morbi eget ipsum sit amet magna molestie elementum at pellentesque lectus. Suspendisse aliquam, dolor vehicula fringilla dictum, tellus mi posuere est, nec maximus tellus nisl.',
        githubLink: 'https://github.com/Arnaud-B-OC/oc-p3',
        websiteLink: 'https://p3.radiant-horizon.net',
        image: '/ress/images/projects/bluel-hd.jpg',
    },
    {
        id: 'nina-carducci',
        title: 'Nina Carducci',
        preview: '/ress/images/projects/nina.jpg',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo justo, facilisis in diam sed, blandit pharetra massa. Morbi tempor tortor non risus rhoncus efficitur. Morbi eget ipsum sit amet magna molestie elementum at pellentesque lectus. Suspendisse aliquam, dolor vehicula fringilla dictum, tellus mi posuere est, nec maximus tellus nisl.',
        githubLink: 'https://github.com/Arnaud-B-OC/oc-p5',
        websiteLink: 'https://p5.radiant-horizon.net',
        image: '/ress/images/projects/nina-hd.jpg',
    },
    {
        id: 'kasa',
        title: 'Kasa',
        preview: '/ress/images/projects/kasa.jpg',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo justo, facilisis in diam sed, blandit pharetra massa. Morbi tempor tortor non risus rhoncus efficitur. Morbi eget ipsum sit amet magna molestie elementum at pellentesque lectus. Suspendisse aliquam, dolor vehicula fringilla dictum, tellus mi posuere est, nec maximus tellus nisl.',
        githubLink: 'https://github.com/Arnaud-B-OC/oc-p6',
        websiteLink: 'https://p6.radiant-horizon.net',
        image: '/ress/images/projects/kasa-hd.jpg',
    },
    {
        id: 'mon-vieux-grimoire',
        title: 'Mon Vieux Grimoire',
        preview: '/ress/images/projects/mvg.jpg',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo justo, facilisis in diam sed, blandit pharetra massa. Morbi tempor tortor non risus rhoncus efficitur. Morbi eget ipsum sit amet magna molestie elementum at pellentesque lectus. Suspendisse aliquam, dolor vehicula fringilla dictum, tellus mi posuere est, nec maximus tellus nisl.',
        githubLink: 'https://github.com/Arnaud-B-OC/oc-p7',
        websiteLink: 'https://p7.radiant-horizon.net',
        image: '/ress/images/projects/mvg-hd.jpg',
    },
];

const SKILLS = [
    {
        url: '/ress/icons/html5.svg',
        alt: 'html',
    },
    {
        url: '/ress/icons/css3.svg',
        alt: 'css',
    },
    {
        url: '/ress/icons/javascript.svg',
        alt: 'javascript',
    },
    {
        url: '/ress/icons/react.svg',
        alt: 'react',
    },
    {
        url: '/ress/icons/sass.svg',
        alt: 'sass',
    },
    {
        url: '/ress/icons/nodejs.svg',
        alt: 'nodejs',
    },
    {
        url: '/ress/icons/typescript.svg',
        alt: 'typescript',
    },
    {
        url: '/ress/icons/git.svg',
        alt: 'git',
    },
    {
        url: '/ress/icons/mongodb.svg',
        alt: 'mongodb',
    },
    {
        url: '/ress/icons/mariadb.svg',
        alt: 'mariadb',
    },
    {
        url: '/ress/icons/nginx.svg',
        alt: 'nginx',
    },
    {
        url: '/ress/icons/docker.svg',
        alt: 'docker',
    },
];









app.get('/api/projects', (req, res) => res.status(200).json(PROJECTS));
app.get('/api/projects/:id', (req, res) => {
    const project = PROJECTS.find((project) => project.id == req.params.id);

    if (project) res.status(200).json(project);
    else res.status(404).json({});
});

app.get('/api/skills', (req, res) => res.status(200).json(SKILLS));

// ### Redir All To index.html ### //
app.get('*', (req, res) => res.sendFile('build/index.html', {root: path.join(__dirname, '..')}));



export default app;
