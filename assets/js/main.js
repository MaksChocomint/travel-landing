const tabs = document.querySelectorAll(".plane__tickets-tab");

const selectTab = (e) => {
  tabs.forEach((tab) => {
    if (tab.classList.contains("ticket__selected")) {
      tab.classList.remove("ticket__selected");
    }
  });

  const clickedTab = document.getElementById(e.target.id);
  clickedTab.classList.add("ticket__selected");
};

tabs.forEach((tab) => tab.addEventListener("click", selectTab));

const likeBtn = document.querySelectorAll(".like-btn");

likeBtn.forEach((like) =>
  like.addEventListener("click", () => {
    if (like.classList.contains("clicked")) {
      like.classList.remove("clicked");
    } else {
      like.classList.add("clicked");
    }
  })
);
