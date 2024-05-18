// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'Rating: 5/5',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: 'I recently purchased an antique necklace. The necklace has a timeless elegance that captivates anyone who sees it. It has become my go-to accessory for both special occasions and everyday wear. It stands out in the simplest way, drawing attention and compliments from friends and strangers alike.'
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'Rating: 5/5',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'I had been searching for ages for a specific victorian bracelet to go with my collection and what I found on here was perfect! Despite how old these types of things are it was such great quality. Would recommend 10/10',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'Rating: 4.5/5',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Had some troubles with shipping, but after contacting through the page everything was sorted out. Ring fits nicely after exchanging it for a different size.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'Rating: 5/5',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'As someone who appreciates the beauty of the past, I wanted to find an engagement ring for my wife that held as much character and story as our journey together. When I saw this antique ring, I knew it was the one. Its timeless elegance and exquisite detail spoke of enduring love—a perfect symbol for our future. The moment I presented the ring, it was met with tears of joy and an overwhelming sense of love. It wasnt just the ring’s beauty that captivated us, but the history it carried and the future it promised. This ring has become a testament to our love, and every time she looks at it, she is reminded of the depth and permanence of our bond.',
    },
  ];
  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });