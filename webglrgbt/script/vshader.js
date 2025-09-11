const vSource = `#version 300 es
uniform int u_mode_v;
in vec4 a_position;
in vec3 a_color;
in vec2 a_texcoord;
out vec3 p_color;
out vec2 p_texcoord;

void main() {
    gl_Position = a_position;
    if (u_mode_v == 1) {
        p_color = a_color;
    } else {
        p_texcoord = a_texcoord;
    }
}
`

