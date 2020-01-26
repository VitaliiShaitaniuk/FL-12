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


function treeView(structure, element){
  if (structure) {
  let unordered_list = document.createElement('ul');

  for (let item of structure){
    let folder_Films = document.createElement('li');
    folder_Films.classList.add('folder');

    let folderIcon = document.createElement('div');
    folderIcon.classList.add('title');
    folder_Films.appendChild(folderIcon);
    let image = document.createElement('i');
    image.classList.add('material-icons', 'folder');
    image.appendChild(document.createTextNode('folder'));
    folderIcon.appendChild(image);
    folderIcon.appendChild(document.createTextNode(item.title));
    if (item.folder){
      folderIcon.classList.toggle('folder');
      image.innerText = 'folder';
      folderIcon.addEventListener('click',
      function(){
          image.innerText === 'folder' ? image.innerText = 'folder_open' : image.innerText = 'folder';
          folder_Films.querySelector('.closed').classList.toggle('open');
        });
      
      
    }
    unordered_list.appendChild(folder_Films);
  }
  element.appendChild(unordered_list);
} else {
  let paragraph = document.createElement('p');
  paragraph.classList.add('emptyFolder');
  let text = document.createTextNode('Folder is empty');
  paragraph.appendChild(text);
  element.appendChild(paragraph);
}
} 

treeView(structure, rootNode);