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
          "uv pip install hf-xet gradio==5.0.0 pydantic==2.10.6",
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
      method: "shell.run",
      params: {
        message: 'hf download tencent/SongGeneration --local-dir=./app --exclude="LICENSE" --exclude="*.md" --exclude=".gitattributes"'
      }
    }
  ]
}
