const fSource = `#version 300 es
precision highp float;
uniform int u_mode_f;
uniform sampler2D u_texture;
in vec3 p_color;
in vec2 p_texcoord;
out vec4 o_color;

void main() {
    if (u_mode_f == 1) {
        o_color = vec4(p_color, 1.0);
    } else {
        o_color = texture(u_texture, p_texcoord);
    }
}
`
