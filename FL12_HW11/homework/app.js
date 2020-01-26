const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

const unordered_list = document.createElement('ul');

document.body.appendChild(unordered_list);

const folder_Films = document.createElement('li');

folder_Films.className = 'closedFolder';
folder_Films.innerHTML = 'Films';
unordered_list.appendChild(folder_Films);


const folder_Documents = document.createElement('li');
folder_Documents.classList.add('closedFolder');
folder_Documents.innerHTML = 'Documents';
unordered_list.appendChild(folder_Documents);

const ulFilms = document.createElement('ul');
folder_Films.appendChild(ulFilms);
const film1 = document.createElement('li');
film1.innerHTML = 'Iron Man.avi';
ulFilms.appendChild(film1);

const folder_Fantasy = document.createElement('li');
folder_Fantasy.classList.add('closedFolder');
folder_Fantasy.innerHTML = 'Fantasy';
ulFilms.appendChild(folder_Fantasy);

const ulFantasy = document.createElement('ul');
folder_Fantasy.appendChild(ulFantasy);
const film2 = document.createElement('li');
film2.innerHTML = 'The Lord of the rings.avi';
ulFantasy.appendChild(film2);

const newFolder1 = document.createElement('li');
newFolder1.classList.add('closedFolder');
newFolder1.innerHTML = 'New folder 1';
ulFantasy.appendChild(newFolder1);

const ulNothing = document.createElement('ul');
newFolder1.appendChild(ulNothing);
const nothing = document.createElement('li');
nothing.innerHTML = 'Folder is empty';
ulNothing.appendChild(nothing);

const ulDocuments = document.createElement('ul');
folder_Documents.appendChild(ulDocuments);
const epamFolder = document.createElement('li');
epamFolder.classList.add('closedFolder');
epamFolder.innerHTML = 'EPAM Homework answers';
ulDocuments.appendChild(epamFolder);

const epamFolderList = document.createElement('ul');
epamFolder.appendChild(epamFolderList);
const epamNothingFolder = document.createElement('li');
epamNothingFolder.innerHTML = 'Folder is empty';
epamFolderList.appendChild(epamNothingFolder);
