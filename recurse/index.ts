const sectionsHeading = [
  "At a glance",
  "Information we collect",
  "How we use your information",
  "Our bases for using your information",
  "Who we share your information with",
  "Where we store and send your information",
  "How long we keep your information",
  "Your rights",
  "Company Information",
]

type Tags = "p" | "h3" | "h4"

type NodeType = {
  tag: Tags
  txt: string
}

type NodeDesc = {
  title?: NodeType
  para?: NodeType
  ul?: string[]
  table?: {
    head: string[]
    columns: string[][]
  }
}

type NodesType = {
  title: NodeType
  desc: (NodeDesc & { desc?: NodeDesc })[]
}

const sections: NodesType[] = [
  {
    title: {
      tag: "h3",
      txt: sectionsHeading[1],
    },
    desc: [
      {
        para: {
          tag: "p",
          txt: "We collect information directly from you including: ",
        },
      },
      {
        title: {
          tag: "h3",
          txt: "Contact details",
        },
        para: {
          tag: "p",
          txt: "Details including your name, business and email address.",
        },
      },
    ],
  },
  {
    title: {
      tag: "h3",
      txt: sectionsHeading[2],
    },
    desc: [
      {
        title: {
          tag: "h4",
          txt: "Marketing and selling Rightbrain",
        },
        para: {
          tag: "p",
          txt: "This includes identifying you as someone who might be interested in trying Rightbrain, and scheduling meetings and demos with you.",
        },
      },
      {
        title: {
          tag: "h4",
          txt: "Administering our business",
        },
        para: {
          tag: "p",
          txt: "This includes providing you with legal notices and updates, enforcing or defending our legal rights, and complying with our legal obligations.",
        },
      },
    ],
  },
  {
    title: { tag: "h3", txt: sectionsHeading[3] },
    desc: [
      {
        // para:
      },
    ],
  },
]

const nodes: (NodeType | string[])[] = []

const pushNode = (node?: NodeType | string[] | undefined) => {
  if (node) nodes.push(node)
}

const flatRecursivelyNode = (tree: NodesType[] | NodesType["desc"]) => {
  if (tree.length === 0) return

  for (let i = 0; i < tree.length; i++) {
    const child = tree[i]

    if ("para" in child) {
      pushNode(child?.para)
      pushNode(child?.ul)
    }

    pushNode(child?.title)

    Array.isArray(child.desc) && flatRecursivelyNode(child.desc as never)
  }
}

flatRecursivelyNode(sections)

export { nodes, sectionsHeading }
