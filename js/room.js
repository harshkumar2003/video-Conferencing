let messagesContainer = document.getElementById('messages');
messagesContainer.scrollTop = messagesContainer.scrollHeight;

const memberContainer = document.getElementById('members__container');
const memberButton = document.getElementById('members__button');

const chatContainer = document.getElementById('messages__container');
const chatButton = document.getElementById('chat__button');

let activeMemberContainer = false;

memberButton.addEventListener('click', () => {
  if (activeMemberContainer) {
    memberContainer.style.display = 'none';
  } else {
    memberContainer.style.display = 'block';
  }

  activeMemberContainer = !activeMemberContainer;
});

let activeChatContainer = false;

chatButton.addEventListener('click', () => {
  if (activeChatContainer) {
    chatContainer.style.display = 'none';
  } else {
    chatContainer.style.display = 'block';
  }

  activeChatContainer = !activeChatContainer;
});

let displayFrame = document.getElementById('stream__box')
let videoFrames = document.getElementsByClassName('video__container')
let userIdInDisplayFrame = null;

let expandVideoFrame = (e) => {

  let child = displayFrame.children[0]
  if (child) {
    document.getElementById('streams__container').appendChild(child)
  }

  displayFrame.style.display = 'block'
  displayFrame.appendChild(e.currentTarget)
  userIdInDisplayFrame = e.currentTarget.id

  for (let i = 0; videoFrames.length > i; i++) {
    if (videoFrames[i].id != userIdInDisplayFrame) {
      videoFrames[i].style.height = '100px'
      videoFrames[i].style.width = '100px'
    }
  }

}

for (let i = 0; videoFrames.length > i; i++) {
  videoFrames[i].addEventListener('click', expandVideoFrame)
}


let hideDisplayFrame = () => {
  userIdInDisplayFrame = null
  displayFrame.style.display = null

  let child = displayFrame.children[0]
  document.getElementById('streams__container').appendChild(child)

  for (let i = 0; videoFrames.length > i; i++) {
    videoFrames[i].style.height = '300px'
    videoFrames[i].style.width = '300px'
  }
}

displayFrame.addEventListener('click', hideDisplayFrame)


let countupInterval;
let secondsElapsed = 0;

function startCountup() {
    const countupElement = document.getElementById('countup');
    const joinButton = document.getElementById('join-btn');
    const endButton = document.getElementById('leave-btn');

    function updateCountup() {
        const hours = Math.floor(secondsElapsed / 3600);
        const minutes = Math.floor((secondsElapsed % 3600) / 60);
        const seconds = secondsElapsed % 60;

        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        countupElement.textContent = formattedTime;
        secondsElapsed++;
    }

    joinButton.addEventListener('click', () => {
        joinButton.disabled = true; // Disable the "Join Meeting" button
        endButton.disabled = false; // Enable the "End Meeting" button
        updateCountup(); // Display the initial time
        countupInterval = setInterval(updateCountup, 1000); // Start the countup
    });

    endButton.addEventListener('click', () => {
        joinButton.disabled = false; // Enable the "Join Meeting" button
        endButton.disabled = true; // Disable the "End Meeting" button
        clearInterval(countupInterval); // Stop the countup
        countupElement.textContent = 'Meeting Not Started'; // Reset the countup display
        secondsElapsed = 0; // Reset the elapsed time
    });

    // Initialize the UI
    joinButton.disabled = false; // Enable the "Join Meeting" button
    endButton.disabled = true; // Disable the "End Meeting" button
    countupElement.textContent = 'Meeting Not Started';
}

// Call the startCountup function to handle the countup when buttons are clicked
startCountup();

