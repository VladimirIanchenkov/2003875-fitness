const videoFrame = document.querySelector('.gym__video');
const ytFrame = document.querySelector('.gym__video-player');
const	videoPlaceholder = document.querySelector('.gym__video-placeholder');
const videoButton = document.querySelector('.gym__video-button');

const initVideoFrame = () => {
  videoFrame.classList.remove('gym__video--nojs');
};

function play() {
  ytFrame.contentWindow.postMessage(JSON.stringify({
    'event': 'command',
    'func': 'playVideo',
    'args': [],
  }), '*');
  ytFrame.setAttribute('tabindex', 0);
  ytFrame.contentWindow.focus();
  videoButton.style.display = 'none';
  videoPlaceholder.style.display = 'none';
}

const initVideo = () => {
  initVideoFrame();
  ytFrame.contentWindow.blur();
  ytFrame.setAttribute('tabindex', -1);
  videoButton.addEventListener('click', play);
};

export {initVideo};
