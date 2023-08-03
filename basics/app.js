//Initialize Alpine into the DOM
document.addEventListener("alpine:init", () => {
  // CLASS 03 - Re-usable data/Able to duplicate data
  Alpine.data("dropdown", () => ({
    open: false,
    toggle() {
      this.open = !this.open;
    },
  }));

  //CLASS 05 - Store
  Alpine.store("currentUser", {
    username: "Alpiner Dev",
    posts: ["Post 1", "Post 2"],
  });
});
