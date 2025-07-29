module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/tencent-ailab/songgeneration app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install gradio==5.0.0 pydantic==2.10.6",
          "uv pip install -r requirements.txt",
          "uv pip install -r requirements_nodeps.txt --no-deps"
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
          // xformers: true,
          // triton: true,
          // sageattention: true
        }
      }
    },
    {
      method: "hf.download",
      params: {
        "_": [ "tencent/SongGeneration" ],
        "exclude": '"LICENSE" "*.md" ".gitattributes"',
        "local-dir": "app",
      }
    }
  ]
}
