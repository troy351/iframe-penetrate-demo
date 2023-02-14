const rand = (a, b) => {
  if (!b) {
    b = a;
    a = 0;
  }

  return Math.floor(Math.random() * (b - a)) + a;
};

export function genBlocks(container, count) {
  for (let i = 0; i < count; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    container.append(block);

    block.style.width = rand(50, 100) + "px";
    block.style.height = rand(50, 100) + "px";
    block.style.left = rand(window.innerWidth) + "px";
    block.style.top = rand(window.innerHeight) + "px";
  }
}
