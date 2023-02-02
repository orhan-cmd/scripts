// Name: Clone A Repository

import "@johnlindquist/kit"

let repo = await arg("Enter a repository, i.e: orhanerday/open-ai")
let name = repo.split("/")[1]
// inspect(name)

// create a folder that called ~/GithubProjects
await term({
    //defaults to home dir
    cwd: `~/GithubProjects`,
    command: `git clone https://github.com/${repo} && cd ${name} && code .`,
    // The footer is optional. All terms continue with the same shortcuts
    footer: `ctrl+c or cmd+enter to continue`,
  })