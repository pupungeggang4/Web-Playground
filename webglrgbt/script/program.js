class Program {
    constructor() {
        this.canvas = document.getElementById('screen')
        this.gl = this.canvas.getContext('webgl2')
        this.canvasUI = document.createElement('canvas')
        this.ctx = this.canvasUI.getContext('2d')
        this.canvasUI.width = 1280
        this.canvasUI.height = 720
        this.glVar = {}

        glInit(this.gl, this.glVar)

        this.programLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        let gl = this.gl
        let glVar = this.glVar
        this.ctx.font = '32px neodgm'
        this.ctx.textAlign = 'left'
        this.ctx.textBaseline = 'top'
        this.ctx.fillStyle = 'white'
        this.ctx.clearRect(0, 0, 1280, 720)
        this.ctx.fillText('Hello WebGL Mesh!', 24, 24)

        gl.enable(gl.BLEND)
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
        gl.clearColor(0.0, 0.0, 0.0, 1.0)
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.useProgram(glVar.program)

        gl.uniform1i(glVar.location['u_mode_v'], 0)
        gl.uniform1i(glVar.location['u_mode_f'], 0)
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.canvasUI)
        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.bHUD)
        gl.vertexAttribPointer(glVar.location['a_position'], 2, gl.FLOAT, false, 4 * 4, 0 * 4)
        gl.vertexAttribPointer(glVar.location['a_texcoord'], 2, gl.FLOAT, false, 4 * 4, 2 * 4)
        gl.enableVertexAttribArray(glVar.location['a_texcoord'])
        gl.enableVertexAttribArray(glVar.location['a_position'])
        gl.disableVertexAttribArray(glVar.location['a_color'])
        gl.drawArrays(gl.TRIANGLES, 0, 6)

        gl.uniform1i(glVar.location['u_mode_v'], 1)
        gl.uniform1i(glVar.location['u_mode_f'], 1)
        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.bTriangle)
        gl.vertexAttribPointer(glVar.location['a_position'], 3, gl.FLOAT, false, 3 * 4, 0 * 4)
        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.bColor)
        gl.vertexAttribPointer(glVar.location['a_color'], 3, gl.FLOAT, false, 3 * 4, 0 * 4)
        gl.disableVertexAttribArray(glVar.location['a_texcoord'])
        gl.enableVertexAttribArray(glVar.location['a_position'])
        gl.enableVertexAttribArray(glVar.location['a_color'])
        gl.drawArrays(gl.TRIANGLES, 0, 3)

        this.programLoop = requestAnimationFrame(() => this.loop())
    }
}
