export function mobileCheck() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

/* export function isStandalone() {
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
  if (document.referrer.startsWith("android-app://")) {
    return true;
  } else if (navigator.standalone || isStandalone) {
    return true;
  }
  return false;
} */

export function isFullScreen() {
  const isFullScreen = window.matchMedia("(display-mode: fullscreen)").matches;
  if (document.referrer.startsWith("android-app://")) {
    return true;
  } else if (
    document.webkitfullscreenelement ||
    document.fullscreenelement ||
    isFullScreen
  ) {
    return true;
  }
  return false;
}
