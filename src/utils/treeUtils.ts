function array2Tree(data: any) {
  let zNodes = data;
  let tmpMap = Object.create(null);
  let tree: any = [];
  let key = "id";
  let parentKey = "pid";
  let childKey = "children";

  zNodes.forEach((item: any) => {
    tmpMap[item[key]] = item;
  });

  zNodes.forEach((item: any) => {
    if (tmpMap[item[parentKey]] && item[key] !== item[parentKey]) {
      if (!tmpMap[item[parentKey]][childKey]) tmpMap[item[parentKey]][childKey] = [];
      tmpMap[item[parentKey]][childKey].push(item);
    } else {
      tree.push(item);
    }
  });

  return tree;
}

export default array2Tree;
