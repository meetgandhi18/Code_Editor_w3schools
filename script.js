function runCode() {
    const html = document.getElementById("htmlCode").value;
    const css = document.getElementById("cssCode").value;
    const js = document.getElementById("jsCode").value;

    const output = document.getElementById("output");

    output.contentDocument.body.innerHTML = `
        <style>${css}</style>
        ${html}
        <script>${js}<\/script>
    `;
}
