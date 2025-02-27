const generateMaze = (sizeX, sizeY) => {
  const maze = [];
  const isVisited = [];
  const visitHistory = [];
  let numberOfVisit = 0;
  for (let i = 0; i < sizeX; ++i) {
    maze.push([]);
    isVisited.push([]);
    for (let j = 0; j < sizeY; ++j) {
      maze[i].push([1, 1, 1, 1]);
      isVisited[i].push(false);
    }
  }

  let x = 0;
  let y = 0;
  isVisited[x][y] = true;
  visitHistory.push([x, y]);
  numberOfVisit += 1;

  while (numberOfVisit < sizeX * sizeY) {
    const options = [false, false, false, false];

    if (y > 0 && !isVisited[x][y - 1]) {
      options[0] = true; //can go left
    }

    if (x > 0 && !isVisited[x - 1][y]) {
      options[1] = true; // can go up
    }

    if (y < sizeY - 1 && !isVisited[x][y + 1]) {
      options[2] = true; //can go right
    }

    if (x < sizeX - 1 && !isVisited[x + 1][y]) {
      options[3] = true; // can go down
    }

    if ((options[0] || options[1] || options[2] || options[3]) === false) {
      const lastCell = visitHistory.pop();
      x = lastCell[0];
      y = lastCell[1];
      continue;
    }

    let randomOption = Math.floor(Math.random() * 4);
    while (!options[randomOption]) {
      randomOption = Math.floor(Math.random() * 4);
    }

    switch (randomOption) {
      case 0:
        maze[x][y][0] = 0;
        maze[x][y - 1][2] = 0;
        visitHistory.push([x, y]);
        y = y - 1; // go to left cell
        break;
      case 1:
        maze[x][y][1] = 0;
        maze[x - 1][y][3] = 0;
        visitHistory.push([x, y]);
        x = x - 1; // go to top cell
        break;
      case 2:
        maze[x][y][2] = 0;
        maze[x][y + 1][0] = 0;
        visitHistory.push([x, y]);
        y = y + 1; // go to right cell
        break;
      default:
        maze[x][y][3] = 0;
        maze[x + 1][y][1] = 0;
        visitHistory.push([x, y]);
        x = x + 1; // go to bottom cell
        break;
    }
    isVisited[x][y] = true;
    numberOfVisit += 1;
  }
  return maze;
};

export default generateMaze;
