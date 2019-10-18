const path = require(`path`)
const rounds = require("./src/data/rounds")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.

  const roundPage = path.resolve(`src/components/Round.js`)
  rounds.forEach(round => {
    createPage({
      path: `/dictionary/${round}`,
      component: roundPage,
      context: {
        round,
      },
    })
  })
}
