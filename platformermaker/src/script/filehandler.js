class FileHandler {
    static download(program) {
        const blob = new Blob([JSON.stringify(program.level)], { type: "text/plain" })
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = "level.json"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
    }

    static upload(e, program) {
        const reader = new FileReader()
        reader.readAsText(e.target.files[0])
        let content = ''
        reader.onload = (e) => {
            content = e.target.result
            program.level = JSON.parse(content)
        }
    }
}
