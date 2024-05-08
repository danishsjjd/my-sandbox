const typicalLoop = (length) => {
  for (let i = 0; i <= length; i++) {
    console.log(i)
  }
  console.log("loop is finish")
}

typicalLoop(4)

const recursiveLoop = (length) => {
  let i = 0
  return function recurseMe() {
    if (length === i) {
      console.log("loop is finish")
      return
    }
    console.log(i)
    recurseMe(i++)
  }
}

recursiveLoop(4)()

const tree = {
  name: "Ahmed",
  children: [
    { name: "shajeel", children: [] },
    {
      name: "saba",
      children: [
        { name: "someOne", children: [] },
        {
          name: "second child of saba",
          children: [{ name: "unknown", children: [] }],
        },
      ],
    },
  ],
}

const printRecursivelyChildren = (tree, name) => {
  if (tree.name === name) console.log(tree.name)
  if (tree.children.length === 0) return

  tree.children.forEach((child) => {
    console.log(child.name)
    printRecursivelyChildren(child)
  })
}

printRecursivelyChildren(tree, tree.name)
