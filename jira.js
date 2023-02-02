
// Name: JIRA
// Description: Run JQL query
// Author: Orhan Erday
// Twitter: @orhan_erday

import "@johnlindquist/kit"

let jql = await arg("Enter the JQL, or press enter if you want to get Your work.")

if (jql == "") {
    jql = `assignee=currentUser() and status != Closed and status != "Done" and status != "Development Done" order by created DESC`
}

let jira = {
    host: await env("JIRA_HOST", "example.atlassian.net"),
    jql: jql 
}

let response = await get(`https://${jira.host}/rest/api/2/search?jql=${jira.jql}`, {
    auth: {
        username: await env("JIRA_USERNAME"),
        password: await env("JIRA_PWD")
    }
})

// inspect(response.data.issues)

let key = await arg(
    `Select JIRA:`,
    response.data.issues.map(({
        fields,
        key
    }) => {
        return {
            name: key,
            description: fields.summary,
            value: key,
            preview: async () => {


                return md(
                    `
# ${fields.summary}

## Description 

${fields.description} 

## Issue Type

${fields.parent.fields.status.name} 

## Status

${fields.parent.fields.issuetype.name} `)
            },
        }
    })
)

await $`start https://${jira.host}/browse/${key}`
