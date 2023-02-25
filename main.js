const btnMenuElement = document.getElementById('buttonMenu');
const btnCloseMenuElement = document.getElementById('buttonClose');
const menuElement = document.getElementById('menu');
const containerSkills = document.querySelector('.skills__container');
const containerProjects = document.querySelector('.projects');

btnMenuElement.addEventListener('click', () => {
  console.log('click');
  menuElement.style.display = 'flex';
  btnMenuElement.style.display = 'none';
  btnCloseMenuElement.style.display = 'block';
})

btnCloseMenuElement.addEventListener('click', () => {
  console.log('click boton para ocultar menu');
  menuElement.style.display = 'none';
  btnCloseMenuElement.style.display = 'none';
  btnMenuElement.style.display = 'block';
})

// list hard skills

const hardSkills = [
  { 'skill': 'HTML 5', 'url': './imagenes/svg/html.svg' },
  { 'skill': 'CSS 3', 'url': './imagenes/svg/css3.svg' },
  { 'skill': 'JavaScript', 'url': './imagenes/svg/javascript.svg' },
  { 'skill': 'Tailwind', 'url': './imagenes/svg/tailwindcss.svg' },
  { 'skill': 'Bootstrap', 'url': './imagenes/svg/bootstrap.svg' },
  { 'skill': 'Git', 'url': './imagenes/svg/git.svg' },
  { 'skill': 'Github', 'url': './imagenes/svg/github.svg' },
];

// show hard skills

const showHardSkills = () => {
  hardSkills.map((hardSkill) => {
    const skillContainer = document.createElement('div');
    const skillImageContainer = document.createElement('div');
    const skillName = document.createElement('span');

    const text = document.createTextNode(hardSkill.skill);

    skillContainer.classList.add('skills__container--item');

    skillImageContainer.style.width = '80%';
    skillImageContainer.style.height = '80%';
    skillImageContainer.style.margin = '0 auto';
    skillImageContainer.style.background = `url(${hardSkill.url})`;
    skillImageContainer.style.backgroundRepeat = 'no-repeat'
    skillImageContainer.style.backgroundSize = 'contain';
    skillImageContainer.style.backgroundPosition = 'center';

    skillName.append(text);

    skillContainer.append(skillImageContainer, skillName);
    containerSkills.append(skillContainer);

  });
}

// list projects

const projects = [
  { 'name': 'Encriptador de texto', 'description': 'aplicación para encriptador y desencriptar texto', 'url-github': 'https://github.com/NellyMollocondo/Encriptador-de-texto--Challenge1-ONE', 'url-web': 'https://nellymollocondo.github.io/Encriptador-de-texto--Challenge1-ONE/', 'url-image': './imagenes/portfolio/encriptador-texto.JPG' },
  // { 'name': 'To - do', 'description': 'Lista de pendientes con React', 'url-github': 'https://github.com/NellyMollocondo/to-do', 'url-web': 'https://nellymollocondo.github.io/to-do/', 'url-image': './imagenes/portfolio/to-do.jpg' },
  { 'name': 'Platzi Travel', 'description': 'Landing page de viajes', 'url-github': 'https://github.com/NellyMollocondo/platzi-travel', 'url-web': 'https://nellymollocondo.github.io/platzi-travel/public/index.html', 'url-image': './imagenes/portfolio/platzi-travel.jpg' },
  { 'name': 'Batatabit', 'description': 'Landing page de criptomonedas', 'url-github': 'https://github.com/NellyMollocondo/batatabit-landing-page', 'url-web': 'https://nellymollocondo.github.io/batatabit-landing-page/index.html', 'url-image':'./imagenes/portfolio/batatabit.jpg' },  
  { 'name': 'Google clone', 'description': 'Clone de google', 'url-github': 'https://github.com/NellyMollocondo/google-clone', 'url-web': 'https://nellymollocondo.github.io/google-clone/', 'url-image': './imagenes/portfolio/google-clone.jpg' },
];

// show projects

const showProjects = () => {
  projects.map( (project) => {
    const projectContainer = document.createElement('div');
    const projectImageContainer = document.createElement('div');
    const projectDetailsContainer = document.createElement('div');

    const projectTitle = document.createElement('h2');
    const projectDescription = document.createElement('p');
    const projectLinksContainer = document.createElement('div');

    const projectGithubLink = document.createElement('a');
    const projectWebLink = document.createElement('a');

    projectImageContainer.style.border = '1px solid #D1D2D4';
    projectImageContainer.style.background = 'url('+ project["url-image"] +')';
    projectImageContainer.style.backgroundPosition = 'center';
    projectImageContainer.style.backgroundRepeat = 'no-repeat';
    projectImageContainer.style.backgroundSize = 'cover';

    const textTitle = document.createTextNode(project.name);
    const textDescription = document.createTextNode(project.description);

    const textGithub = document.createTextNode('Github');
    const textWeb = document.createTextNode('Web');   

    projectTitle.append(textTitle);
    projectDescription.append(textDescription);
    projectGithubLink.append(textGithub);
    projectWebLink.append(textWeb);    

    projectContainer.classList.add('project');
    projectImageContainer.classList.add('image', 'project-1');
    projectDetailsContainer.classList.add('details');
    
    projectTitle.classList.add('title');
    projectDescription.classList.add('paragraph');
    projectLinksContainer.classList.add('links');

    projectGithubLink.href = project['url-github'];
    projectGithubLink.target = '_blank';
    projectWebLink.href = project['url-web'];
    projectWebLink.target = '_blank';

    projectLinksContainer.append(projectGithubLink, projectWebLink);
    projectDetailsContainer.append(projectTitle, projectDescription, projectLinksContainer);
    projectContainer.append(projectImageContainer, projectDetailsContainer);
    containerProjects.append(projectContainer);
  })
}

// render sections
const renderSections = () => {
  location.hash ='#home';
  showHardSkills();
  showProjects();
}

document.addEventListener('DOMContentLoaded', renderSections);

