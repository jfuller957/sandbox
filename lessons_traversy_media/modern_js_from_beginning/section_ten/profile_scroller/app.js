const data = [
  {
    name: 'James Fuller',
    age: 34,
    gender: 'male',
    lookingfor: 'female',
    location: 'San Diego CA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Christina Vanderwerken',
    age: 34,
    gender: 'female',
    lookingfor: 'male',
    location: 'San Diego CA',
    image: 'https://randomuser.me/api/portraits/women/81.jpg'
  },
  {
    name: 'Michael Hartmayer',
    age: 34,
    gender: 'male',
    lookingfor: 'female',
    location: 'San Diego CA',
    image: 'https://randomuser.me/api/portraits/men/81.jpg'
  },
  {
    name: 'Francis Cullen',
    age: 27,
    gender: 'male',
    lookingfor: 'female',
    location: 'San Diego CA',
    image: 'https://randomuser.me/api/portraits/men/80.jpg'
  }
];

const profile = profileIterator(data);

// Call First Profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profile.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Preference: ${currentProfile.lookingfor}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">
    `;
  } else {
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length ?
        { value: profiles[nextIndex++], done: false } :
        { done: true }
    }
  }
}