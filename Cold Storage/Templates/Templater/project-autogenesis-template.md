<%*
const projectName = await tp.system.prompt("Enter project name")
const basePath = `Autogénesis/${projectName}`
const folders = ['aethergon', 'noema', 'pathos', 'pragma']

// Create base folder
await app.vault.createFolder(basePath)

// Create subfolders
for (const folder of folders) {
  await app.vault.createFolder(`${basePath}/${folder}`)
}

// Create MoC file
const mocFilePath = `${basePath}/MoC - ${projectName}.md`

await app.vault.create(mocFilePath, '#todo: Apply the [[MoC - Personal Project Template]] to this file')
%>
