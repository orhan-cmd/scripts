// Name: Create a GoApp
// Description: Create a GoApp is a simple app creation script

import "@johnlindquist/kit"

let projectName = await arg("Enter your project name")

await term({
  //defaults to home dir
  cwd: `~/GoProjectsByScript`,
  command: `mkdir ${projectName} && cd ${projectName} && go mod init ${projectName} && echo package main > main.go && echo. >> main.go && echo func main() { >> main.go && echo. >> main.go && echo } >> main.go && code . && exit 0`,
  // The footer is optional. All terms continue with the same shortcuts
  footer: `ctrl+c or cmd+enter to continue`,
})