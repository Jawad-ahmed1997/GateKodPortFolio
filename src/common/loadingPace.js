const loadingPace = () => {
  Pace.on("start", function () {
    const preloader = document.querySelector("#preloader");
    const loading = document.querySelector(".loading");
    if (preloader) preloader.classList.remove("isdone");
    if (loading) loading.classList.remove("isdone");
  });

  Pace.on("done", function () {
    const preloader = document.querySelector("#preloader");
    const loading = document.querySelector(".loading");
    if (preloader) preloader.classList.add("isdone");
    if (loading) loading.classList.add("isdone");
  });

  if (document.querySelector("body")?.classList.contains("pace-done")) {
    const preloader = document.querySelector("#preloader");
    const loading = document.querySelector(".loading");
    if (preloader) preloader.classList.add("isdone");
    if (loading) loading.classList.add("isdone");
  }

  window.addEventListener("load", () => {
    const preloader = document.querySelector("#preloader");
    const loading = document.querySelector(".loading");
    if (preloader) preloader.classList.add("isdone");
    if (loading) loading.classList.add("isdone");
    const paceRunning = document.querySelector('.pace-running.pace-running');
    if (paceRunning) paceRunning.classList.remove('pace-running');
  });
};

export default loadingPace;
