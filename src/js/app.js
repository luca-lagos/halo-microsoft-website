const more_options = document.querySelector("#b-more");
const b_show_mobile_links = document.querySelector("#b-menu");
const b_mobile_icon = document.querySelector("#b-menu span");
const mobile_menu = document.querySelector(".links");
const more_menu = document.querySelector(".more .menu");
const mobile_overlay = document.querySelector(".overlay");

b_show_mobile_links.addEventListener("click", (e) => {
  e.preventDefault();
  if (b_mobile_icon.innerHTML === "menu") {
    b_mobile_icon.innerText = "close";
  } else {
    b_mobile_icon.innerText = "menu";
  }
  mobile_overlay.classList.toggle("show");
  mobile_menu.classList.toggle("show");
});

more_options.addEventListener("click", (e) => {
  e.preventDefault();
  more_menu.classList.toggle("show");
});

const videos = [
  {
    id: "PyMlV5_HRWk",
  },
  {
    id: "XCbMVbeKlCg",
  },
  {
    id: "Fmdb-KmlzD8",
  },
  {
    id: "lOthvD1rMbQ",
  },
  {
    id: "nXDk86lQhto",
  },
];

const slider_container = document.querySelector("#slider");
const current_container = document.querySelector("#current");
const videos_container = document.querySelector("#videos-container");
const b_next = document.querySelector("#next");
const b_prev = document.querySelector("#prev");
let current = 0;

b_next.addEventListener("click", (e) => {
  let change = current;
  if (current + 1 < videos.length) {
    current = current + 1;
    b_prev.classList.remove("disable");
  }
  if (current == 4) {
    b_next.className = "disable";
  }
  if (current != change) {
    render_current_video(videos[current].id);
  }
});

b_prev.addEventListener("click", (e) => {
  let change = current;
  if (current + 1 >= 0) {
    current = current - 1;
    b_next.classList.remove("disable");
  }
  if (current == 0) {
    b_prev.className = "disable";
  }
  if (current != change) {
    render_current_video(videos[current].id);
  }
});

const render_current_video = (id) => {
  current_container.innerHTML = `<iframe width="100%" height="720" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
};

const render_all_videos = () => {
  const html = videos.map((video, index) => {
    return `
    <div class="item">
        <a href="#" data-id=${index}>
          <img src="https://i.ytimg.com/vi/${video.id}/mqdefault.jpg" alt="">
        </a>
      </div>
    `;
  });
  videos_container.innerHTML = html.join("");
  document.querySelectorAll(".item a").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const id = +item.getAttribute("data-id");
      current = id;
      if (current == 0) {
        b_prev.className = "disable";
      } else if (current == 4) {
        b_next.className = "disable";
      } else {
        b_prev.classList.remove("disable");
        b_next.classList.remove("disable");
      }
      render_current_video(videos[current].id);
    });
  });
};

render_current_video(videos[current].id);
render_all_videos();
